package cn.jiguang.cordova.im;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;

import com.google.gson.Gson;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import cn.jpush.im.android.api.ContactManager;
import cn.jpush.im.android.api.JMessageClient;
import cn.jpush.im.android.api.callback.CreateGroupCallback;
import cn.jpush.im.android.api.callback.DownloadCompletionCallback;
import cn.jpush.im.android.api.callback.GetAvatarBitmapCallback;
import cn.jpush.im.android.api.callback.GetBlacklistCallback;
import cn.jpush.im.android.api.callback.GetGroupIDListCallback;
import cn.jpush.im.android.api.callback.GetGroupInfoCallback;
import cn.jpush.im.android.api.callback.GetGroupMembersCallback;
import cn.jpush.im.android.api.callback.GetNoDisurbListCallback;
import cn.jpush.im.android.api.callback.GetUserInfoCallback;
import cn.jpush.im.android.api.callback.GetUserInfoListCallback;
import cn.jpush.im.android.api.callback.IntegerCallback;
import cn.jpush.im.android.api.content.EventNotificationContent;
import cn.jpush.im.android.api.content.FileContent;
import cn.jpush.im.android.api.content.ImageContent;
import cn.jpush.im.android.api.content.TextContent;
import cn.jpush.im.android.api.content.VoiceContent;
import cn.jpush.im.android.api.enums.ContentType;
import cn.jpush.im.android.api.enums.ConversationType;
import cn.jpush.im.android.api.event.ContactNotifyEvent;
import cn.jpush.im.android.api.event.LoginStateChangeEvent;
import cn.jpush.im.android.api.event.MessageEvent;
import cn.jpush.im.android.api.event.NotificationClickEvent;
import cn.jpush.im.android.api.event.OfflineMessageEvent;
import cn.jpush.im.android.api.exceptions.JMFileSizeExceedException;
import cn.jpush.im.android.api.model.Conversation;
import cn.jpush.im.android.api.model.GroupInfo;
import cn.jpush.im.android.api.model.Message;
import cn.jpush.im.android.api.model.UserInfo;
import cn.jpush.im.api.BasicCallback;


public class JMessagePlugin extends CordovaPlugin {

    private static String TAG = JMessagePlugin.class.getSimpleName();

    private static JMessagePlugin instance;

    private ExecutorService threadPool = Executors.newFixedThreadPool(1);
    private Gson mGson = new Gson();
    private Activity mCordovaActivity;

    public JMessagePlugin() {
        instance = this;
    }

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        mCordovaActivity = cordova.getActivity();
        JMessageClient.init(this.cordova.getActivity().getApplicationContext());
        JMessageClient.registerEventReceiver(this);
    }

    public void onEvent(MessageEvent event) {
        final Message msg = event.getMessage();
        try {
            String jsonStr = mGson.toJson(msg);
            JSONObject msgJson = getMessageJSONObject(msg);

            switch (msg.getContentType()) {
                case text:
                    fireEvent("onReceiveTextMessage", jsonStr);
                    break;
                case image:
                    fireEvent("onReceiveImageMessage", msgJson.toString());
                    break;
                case voice:
                    fireEvent("onReceiveVoiceMessage", msgJson.toString());
                    break;
                case custom:
                    fireEvent("onReceiveCustomMessage", msgJson.toString());
                    break;
                case eventNotification:
                    EventNotificationContent content = (EventNotificationContent) msg.getContent();
                    switch (content.getEventNotificationType()) {
                        case group_member_added:    // 群成员加群事件。
                            fireEvent("onGroupMemberAdded", msgJson.toString());
                            break;
                        case group_member_removed:
                            // 群成员被踢事件（只有被踢的用户能收到此事件）。
                            fireEvent("onGroupMemberRemoved", msgJson.toString());
                            break;
                        case group_member_exit:
                            fireEvent("onGroupMemberExit", msgJson.toString());
                            break;
                        default:
                    }
                    break;
                case unknown:
                    break;
                default:
            }
            fireEvent("onReceiveMessage", msgJson.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public void onEvent(final OfflineMessageEvent event) {
        try {
            final JSONObject json = new JSONObject();

            String conversationJsonStr = mGson.toJson(event.getConversation());
            json.put("conversation", new JSONObject(conversationJsonStr));

            final JSONArray msgJsonArr = new JSONArray();
            int lastMediaMsgIndex = -1;

            for (int i = event.getOfflineMessageList().size() - 1; i >= 0; i--) {
                if (isMediaMessage(event.getOfflineMessageList().get(i))) {
                    lastMediaMsgIndex = i;
                    break;
                }
            }

            if (lastMediaMsgIndex == -1) {
                for (Message msg : event.getOfflineMessageList()) {
                  msgJsonArr.put(getMessageJSONObject(msg));
                }
                json.put("messageList", msgJsonArr);
                fireEvent("onSyncOfflineMessage", json.toString());
                return;
            }

            for (int i = 0; i < event.getOfflineMessageList().size(); i++) {
                final Message msg = event.getOfflineMessageList().get(i);

                if (!isMediaMessage(msg)) {
                    continue;
                }

                final int finalLastMediaMsgIndex = lastMediaMsgIndex;
                switch (msg.getContentType()) {
                    case image:
                        final int finalI = i;
                        ((ImageContent) msg.getContent()).downloadThumbnailImage(msg, new DownloadCompletionCallback() {
                            @Override
                            public void onComplete(int status, String desc, File file) {
                                try {
                                    if (finalI == finalLastMediaMsgIndex) {
                                        for (Message msg : event.getOfflineMessageList()) {
                                            msgJsonArr.put(getMessageJSONObject(msg));
                                        }
                                        json.put("messageList", msgJsonArr);
                                        fireEvent("onSyncOfflineMessage", json.toString());
                                    }
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                        });
                        break;
                    case voice:
                        final int vI = i;
                        ((VoiceContent) msg.getContent()).downloadVoiceFile(msg, new DownloadCompletionCallback() {
                            @Override
                            public void onComplete(int status, String desc, File file) {
                                try {
                                    if (vI == finalLastMediaMsgIndex) {
                                        for (Message msg : event.getOfflineMessageList()) {
                                            msgJsonArr.put(getMessageJSONObject(msg));
                                        }
                                        json.put("messageList", msgJsonArr);
                                        fireEvent("onSyncOfflineMessage", json.toString());
                                    }
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                        });
                        break;
                    case file:
                        final int fI = i;
                        ((FileContent) msg.getContent()).downloadFile(msg, new DownloadCompletionCallback() {
                            @Override
                            public void onComplete(int status, String desc, File file) {
                                try {
                                    if (fI == finalLastMediaMsgIndex) {
                                        for (Message msg : event.getOfflineMessageList()) {
                                            msgJsonArr.put(getMessageJSONObject(msg));
                                        }
                                        json.put("messageList", msgJsonArr);
                                        fireEvent("onSyncOfflineMessage", json.toString());
                                    }
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }
                        });
                        break;
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private boolean isMediaMessage(Message msg) {
        return msg.getContentType() == ContentType.image ||
                msg.getContentType() == ContentType.voice ||
                msg.getContentType() == ContentType.video ||
                msg.getContentType() == ContentType.file;
    }

    public void onEvent(LoginStateChangeEvent event) {
        String jsonStr = mGson.toJson(event);
        LoginStateChangeEvent.Reason reason = event.getReason();    // 获取当前用户登录状态变更的原因。
        switch (reason) {
            case user_password_change:
                fireEvent("onUserPasswordChanged", jsonStr);
                break;
            case user_logout:
                fireEvent("onUserLogout", jsonStr);
                break;
            case user_deleted:
                fireEvent("onUserDeleted", jsonStr);
                break;
            default:
        }
    }

    // 触发通知栏点击事件。
    public void onEvent(NotificationClickEvent event) {
        Message msg = event.getMessage();

        String json = mGson.toJson(msg);
        fireEvent("onOpenMessage", json);

        Intent launch = cordova.getActivity().getApplicationContext()
                .getPackageManager().getLaunchIntentForPackage(
                        cordova.getActivity().getApplicationContext().getPackageName());
        launch.addCategory(Intent.CATEGORY_LAUNCHER);
        launch.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        cordova.getActivity().getApplicationContext().startActivity(launch);
    }

    /**
     * 好友相关事件通知
     */
    public void onEvent(ContactNotifyEvent event) {
        String reason = event.getReason();  // 事件发生的理由
        String fromUsername = event.getFromUsername();
        String fromAppKey = event.getfromUserAppKey();

        JSONObject json = new JSONObject();
        try {
            json.put("reason", reason);
            json.put("fromUsername", fromUsername);
            json.put("fromAppKey", fromAppKey);
        } catch (JSONException e) {
            e.printStackTrace();
            return;
        }

        String jsonStr = json.toString();
        switch (event.getType()) {
            case invite_received:   // 收到好友邀请
                fireEvent("onInviteReceived", jsonStr);
                break;
            case invite_accepted:   // 对方接受了你的好友邀请
                fireEvent("onInviteAccepted", jsonStr);
                break;
            case invite_declined:   // 对方拒绝了你的好友邀请
                fireEvent("onInviteDeclined", jsonStr);
                break;
            case contact_deleted:   // 对方将你从好友中删除
                fireEvent("onContactDeleted", jsonStr);
                break;
            default:
        }
    }

    private void triggerMessageClickEvent(Message msg) {
        String json = mGson.toJson(msg);
        fireEvent("onOpenMessage", json);
    }

    private void fireEvent(String eventName, String jsonStr) {
        String format = "window.JMessage." + eventName + "(%s);";
        String js;
        if (jsonStr != null) {
            js = String.format(format, jsonStr);
        } else {
            js = String.format(format, "");
        }

        final String finalJs = js;
        mCordovaActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                instance.webView.loadUrl("javascript:" + finalJs);
            }
        });
    }

    @Override
    public boolean execute(final String action, final JSONArray data,
                           final CallbackContext callback) throws JSONException {
        threadPool.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Method method = JMessagePlugin.class.getDeclaredMethod(action,
                            JSONArray.class, CallbackContext.class);
                    method.invoke(JMessagePlugin.this, data, callback);
                } catch (Exception e) {
                    Log.e(TAG, e.toString());
                }
            }
        });
        return true;
    }

    @Override
    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
    }

    public void onDestroy() {
        JMessageClient.unRegisterEventReceiver(this);
        mCordovaActivity = null;
    }

    // Login and register API.

    public void userRegister(JSONArray data, final CallbackContext callback) {
        String username;
        String password;
        try {
            username = data.getString(0);
            password = data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        JMessageClient.register(username, password, new BasicCallback() {
            @Override
            public void gotResult(final int status, final String desc) {
                handleResult("", status, desc, callback);
            }
        });
    }

    public void userLogin(JSONArray data, CallbackContext callback) {
        final CallbackContext cb = callback;
        try {
            String username = data.getString(0);
            String password = data.getString(1);

            JMessageClient.login(username, password, new BasicCallback() {
                @Override
                public void gotResult(final int status, final String desc) {
                    handleResult("", status, desc, cb);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json");
        }
    }

    public void userLogout(JSONArray data, CallbackContext callback) {
        try {
            JMessageClient.logout();
            callback.success();
        } catch (Exception exception) {
            callback.error(exception.toString());
        }
    }

    // User info API.
    public void getUserInfo(JSONArray data, final CallbackContext callback) {
        try {
            String username = data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);
            JMessageClient.getUserInfo(username, appKey, new GetUserInfoCallback() {
                @Override
                public void gotResult(int responseCode, String responseDesc, UserInfo userInfo) {
                    if (responseCode == 0) {
                        try {
                            callback.success(getUserInfoJsonObject(userInfo));
                        } catch (JSONException e) {
                            e.printStackTrace();
                            callback.error(e.getMessage());
                        }
                    } else {
                        callback.error(responseDesc);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getMyInfo(JSONArray data, final CallbackContext callback) {
        UserInfo myInfo = JMessageClient.getMyInfo();
        if (myInfo != null) {
            try {
                callback.success(getUserInfoJsonObject(myInfo));
            } catch (JSONException e) {
                e.printStackTrace();
                callback.error(e.getMessage());
            }
        } else {
            callback.error("My info is null.");
        }
    }

    public void updateMyInfo(JSONArray data, final CallbackContext callback) {
        try {
            String field = data.getString(0);
            String value = data.getString(1);

            UserInfo myInfo = JMessageClient.getMyInfo();
            String result = updateUserInfo(myInfo, field, value);
            if (result == null) {
                callback.success();
            } else {
                callback.error(result);
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    /**
     * Update my password.
     *
     * @param data     JSONArray; data.getString(0): old password, data.getString(1): new password.
     * @param callback result callback method.
     */
    public void updateMyPassword(JSONArray data, CallbackContext callback) {
        final CallbackContext cb = callback;
        try {
            String oldPwd = data.getString(0);
            String newPwd = data.getString(1);
            JMessageClient.updateUserPassword(oldPwd, newPwd, new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    handleResult("", status, desc, cb);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading password json.");
        }
    }

    /**
     * Update my avatar.
     *
     * @param data     data.getString(0): the URL of the users avatar file.
     * @param callback callback method.
     */
    public void updateMyAvatar(JSONArray data, CallbackContext callback) {
        final CallbackContext cb = callback;
        try {
            String avatarUrlStr = data.getString(0);
            if (TextUtils.isEmpty(avatarUrlStr)) {
                callback.error("Avatar URL is empty!");
                return;
            }
            URL url = new URL(avatarUrlStr);
            String path = url.getPath();
            File avatarFile = new File(path);
            JMessageClient.updateUserAvatar(avatarFile, new BasicCallback() {
                @Override
                public void gotResult(int status, String errorDesc) {
                    handleResult("", status, errorDesc, cb);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Reading alias JSON error.");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("Avatar URL error.");
        }
    }

    public void updateMyAvatarByPath(JSONArray data, final CallbackContext callback) {
        try {
            String path = data.getString(0);
            File avatarFile = new File(path);
            if (!avatarFile.exists()) {
                callback.error("File not exist.");
                return;
            }
            JMessageClient.updateUserAvatar(avatarFile, new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success();
                    } else {
                        callback.error(status);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
        }
    }

    public void getUserAvatar(JSONArray data, final CallbackContext callback) {
        try {
            String username = data.isNull(0) ? "" : data.getString(0);
            if (TextUtils.isEmpty(username)) {  // 取得当前登录用户的头像缩略图地址
                UserInfo myInfo = JMessageClient.getMyInfo();
                File avatarFile = myInfo.getAvatarFile();
                String path = "";
                if (avatarFile != null) {
                    path = avatarFile.getAbsolutePath();
                }
                callback.success(path);
            } else {    // 取得指定用户的头像缩略图地址
                JMessageClient.getUserInfo(username, new GetUserInfoCallback() {
                    @Override
                    public void gotResult(int status, String desc, UserInfo userInfo) {
                        if (status == 0) {
                            File avatarFile = userInfo.getAvatarFile();
                            String path = "";
                            if (avatarFile != null) {
                                path = avatarFile.getAbsolutePath();
                            }
                            callback.success(path);
                        } else {
                            Log.i(TAG, "getUserAvatar: " + status + " - " + desc);
                            callback.error(status);
                        }
                    }
                });
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
        }
    }

    /**
     * 获取用户头像原图，当 username 为空时，默认下载当前用户头像。
     */
    public void getOriginalUserAvatar(JSONArray data, final CallbackContext callback) {
        try {
            final String username = data.isNull(0) ? "" : data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);

            final String fileName;
            final String avatarPath = getAvatarPath();

            if (TextUtils.isEmpty(username)) {
                final UserInfo myInfo = JMessageClient.getMyInfo();
                fileName = "avatar_" + myInfo.getUserID();
                File avatarFile = new File(avatarPath + fileName + ".png");
                if (avatarFile.exists()) {
                    callback.success(avatarFile.getAbsolutePath());
                    return;
                }
                myInfo.getBigAvatarBitmap(new GetAvatarBitmapCallback() {
                    @Override
                    public void gotResult(int status, String desc, Bitmap bitmap) {
                        if (status == 0) {
                            if (bitmap == null) {
                                callback.success("");
                            } else {
                                callback.success(storeImage(bitmap, fileName));
                            }
                        } else {
                            Log.i(TAG, "getOriginalUserAvatar: " + status + " - " + desc);
                            callback.error(status);
                        }
                    }
                });
            } else {
                JMessageClient.getUserInfo(username, appKey, new GetUserInfoCallback() {
                    @Override
                    public void gotResult(int status, String desc, final UserInfo userInfo) {
                        if (status == 0) {
                            String fileName = "avatar_" + userInfo.getUserID();
                            File avatarFile = new File(avatarPath + fileName + ".png");
                            if (avatarFile.exists()) {
                                callback.success(avatarFile.getAbsolutePath());
                                return;
                            }
                            userInfo.getBigAvatarBitmap(new GetAvatarBitmapCallback() {
                                @Override
                                public void gotResult(int status, String desc, Bitmap bitmap) {
                                    if (status == 0) {
                                        if (bitmap == null) {
                                            callback.success("");
                                        } else {
                                            String filename = "avatar_" + userInfo.getUserID();
                                            callback.success(storeImage(bitmap, filename));
                                        }
                                    } else {
                                        Log.i(TAG, "getOriginalUserAvatar: " + status + " - " + desc);
                                        callback.error(status);
                                    }
                                }
                            });
                        } else {
                            Log.i(TAG, "getOriginalUserAvatar: " + status + " - " + desc);
                            callback.error(status);
                        }
                    }
                });
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
        }
    }


    // Message API.

    public void sendSingleTextMessage(JSONArray data, final CallbackContext callback) {
        Log.i(TAG, "sendSingleTextMessage \n" + data);

        try {
            String username = data.getString(0);
            String text = data.getString(1);
            String appKey = data.isNull(2) ? "" : data.getString(2);

            Conversation conversation = JMessageClient.getSingleConversation(
                    username, appKey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(username,
                        appKey);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            TextContent content = new TextContent(text);
            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json.");
        }
    }

    public void sendSingleTextMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            String username = data.getString(0);
            String text = data.getString(1);
            String json = data.getString(2);    // 自定义信息的 Json 数据。
            String appkey = data.isNull(3) ? "" : data.getString(3);

            Conversation conversation = getConversation("single", username, appkey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(username, appkey);
            }
            if (conversation == null) {
                callback.error("无法创建会话");
                return;
            }

            TextContent content = new TextContent(text);

            if (!TextUtils.isEmpty(json)) {
                JSONObject values = new JSONObject(json);
                Iterator<? extends String> keys = values.keys();
                Map<String, String> valuesMap = new HashMap<String, String>();

                String key, value;
                while (keys.hasNext()) {
                    key = keys.next();
                    value = values.getString(key);
                    valuesMap.put(key, value);
                }
                content.setExtras(valuesMap);
            }

            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.toString());
        }
    }

    /**
     * @param data     JSONArray.
     *                 data.getString(0):username, data.getString(1):text
     * @param callback CallbackContext.
     */
    public void sendSingleImageMessage(JSONArray data, final CallbackContext callback) {
        try {
            String userName = data.getString(0);
            String imgUrlStr = data.getString(1);
            String appKey = data.isNull(2) ? "" : data.getString(2);

            Conversation conversation = JMessageClient.getSingleConversation(
                    userName, appKey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(userName,
                        appKey);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL imgUrl = new URL(imgUrlStr);
            File imgFile = new File(imgUrl.getPath());
            final Message msg = conversation.createSendImageMessage(imgFile);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("文件不存在");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("URL error.");
        }
    }

    public void sendSingleImageMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            String userName = data.getString(0);
            String imgUrlStr = data.getString(1);
            String json = data.getString(2);
            String appKey = data.isNull(3) ? "" : data.getString(3);

            Conversation conversation = JMessageClient.getSingleConversation(
                    userName, appKey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(userName,
                        appKey);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL imgUrl = new URL(imgUrlStr);
            File imgFile = new File(imgUrl.getPath());
            ImageContent content = new ImageContent(imgFile);

            if (!TextUtils.isEmpty(json)) {
                JSONObject values = new JSONObject(json);
                Iterator<? extends String> keys = values.keys();
                Map<String, String> valuesMap = new HashMap<String, String>();

                String key, value;
                while (keys.hasNext()) {
                    key = keys.next();
                    value = values.getString(key);
                    valuesMap.put(key, value);
                }
                content.setExtras(valuesMap);
            }

            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("文件不存在");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("URL error.");
        }
    }

    /**
     * @param data     JSONArray.
     *                 data.getString(0):username, data.getString(1):voiceFileUrl.
     * @param callback CallbackContext.
     */
    public void sendSingleVoiceMessage(JSONArray data, final CallbackContext callback) {
        try {
            String userName = data.getString(0);
            String voiceUrlStr = data.getString(1);
            String appKey = data.isNull(2) ? "" : data.getString(2);

            Conversation conversation = JMessageClient.getSingleConversation(
                    userName, appKey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(userName, appKey);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL url = new URL(voiceUrlStr);
            String voicePath = url.getPath();
            File file = new File(voicePath);

            MediaPlayer mediaPlayer = MediaPlayer.create(this.cordova.getActivity(),
                    Uri.parse(voicePath));
            int duration = mediaPlayer.getDuration();

            final Message msg = JMessageClient.createSingleVoiceMessage(userName, file,
                    duration);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
            mediaPlayer.release();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("file url error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    public void sendSingleVoiceMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            String userName = data.getString(0);
            String voiceUrlStr = data.getString(1);
            String json = data.getString(2);
            String appKey = data.isNull(3) ? "" : data.getString(3);

            Conversation conversation = JMessageClient.getSingleConversation(
                    userName, appKey);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(userName, appKey);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL url = new URL(voiceUrlStr);
            String voicePath = url.getPath();
            File file = new File(voicePath);

            MediaPlayer mediaPlayer = MediaPlayer.create(this.cordova.getActivity(),
                    Uri.parse(voicePath));
            int duration = mediaPlayer.getDuration();

            VoiceContent content = new VoiceContent(file, duration);

            if (!TextUtils.isEmpty(json)) {
                JSONObject values = new JSONObject(json);
                Iterator<? extends String> keys = values.keys();
                Map<String, String> valuesMap = new HashMap<String, String>();

                String key, value;
                while (keys.hasNext()) {
                    key = keys.next();
                    value = values.getString(key);
                    valuesMap.put(key, value);
                }
                content.setExtras(valuesMap);
            }

            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
            mediaPlayer.release();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("file url error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    /**
     * @param data     JSONArray.
     *                 data.getString(0):username, data.getJSONObject(1):custom key-values.
     * @param callback CallbackContext.
     */
    public void sendSingleCustomMessage(JSONArray data, final CallbackContext callback) {
        try {
            String userName = data.getString(0);
            String appKey = data.isNull(2) ? "" : data.getString(2);

            Conversation con = JMessageClient.getSingleConversation(userName,
                    appKey);
            if (con == null) {
                con = Conversation.createSingleConversation(userName, appKey);
            }
            if (con == null) {
                callback.error("无法创建对话");
                return;
            }

            String jsonStr = data.getString(1);
            JSONObject values = new JSONObject(jsonStr);
            Iterator<? extends String> keys = values.keys();
            Map<String, String> valuesMap = new HashMap<String, String>();

            String key, value;
            while (keys.hasNext()) {
                key = keys.next();
                value = values.getString(key);
                valuesMap.put(key, value);
            }
            final Message msg = JMessageClient.createSingleCustomMessage(userName, appKey, valuesMap);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    /**
     * 发送单聊位置消息。
     *
     * @param data
     * @param callback
     */
    public void sendSingleLocationMessage(JSONArray data, final CallbackContext callback) {
        String username;
        String appKey;
        double latitude;    // 纬度信息
        double longitude;   // 经度信息
        int scale;          // 地图缩放比例
        String address;     // 详细地址信息

        try {
            username = data.getString(0);
            appKey = data.getString(1);
            latitude = data.getDouble(2);
            longitude = data.getDouble(3);
            scale = data.getInt(4);
            address = data.getString(5);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        final Message locationMsg = JMessageClient.createSingleLocationMessage(username, appKey,
                latitude, longitude, scale, address);

        locationMsg.setOnSendCompleteCallback(new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success(mGson.toJson(locationMsg));
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });

        JMessageClient.sendMessage(locationMsg);
    }

    public void sendSingleFileMessage(JSONArray data, final CallbackContext callback) {
        String username;
        String appKey;
        String path;
        String fileName;

        try {
            username = data.getString(0);
            appKey = data.getString(1);
            path = data.getString(2);
            fileName = data.isNull(3) ? "" : data.getString(3);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        if (TextUtils.isEmpty(path)) {
            callback.error("File path is empty.");
            return;
        }

        File file = new File(path);

        final Message msg;
        try {
            msg = JMessageClient.createSingleFileMessage(username, appKey, file, fileName);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("File not found.");
            return;
        } catch (JMFileSizeExceedException e) {
            e.printStackTrace();
            callback.error("File size is too large.");
            return;
        }

        final String json = mGson.toJson(msg);
        msg.setOnSendCompleteCallback(new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success(json);
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });

        JMessageClient.sendMessage(msg);
    }

    /**
     * @param data     JSONArray.
     *                 data.getLong(0):groupId, data.getString(1):text.
     * @param callback CallbackContext.
     */
    public void sendGroupTextMessage(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String text = data.getString(1);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            final Message msg = JMessageClient.createGroupTextMessage(groupId, text);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json.");
        }
    }

    public void sendGroupTextMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String text = data.getString(1);
            String json = data.getString(2);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            TextContent content = new TextContent(text);
            if (!TextUtils.isEmpty(json)) {
                content.setExtras(getExtras(json));
            }

            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json.");
        }
    }

    public void sendGroupImageMessage(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String imgUrlStr = data.getString(1);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL imgUrl = new URL(imgUrlStr);
            File imgFile = new File(imgUrl.getPath());
            final Message msg = JMessageClient.createGroupImageMessage(groupId, imgFile);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    public void sendGroupImageMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String imgUrlStr = data.getString(1);
            String json = data.getString(2);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL imgUrl = new URL(imgUrlStr);
            File imgFile = new File(imgUrl.getPath());
            ImageContent content = new ImageContent(imgFile);

            if (!TextUtils.isEmpty(json)) {
                content.setExtras(getExtras(json));
            }

            final Message msg = conversation.createSendMessage(content);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    public void sendGroupVoiceMessage(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String voiceUrlStr = data.getString(1);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL url = new URL(voiceUrlStr);
            String voicePath = url.getPath();
            File file = new File(voicePath);

            MediaPlayer mediaPlayer = MediaPlayer.create(this.cordova.getActivity(),
                    Uri.parse(voicePath));
            int duration = mediaPlayer.getDuration();

            final Message msg = JMessageClient.createGroupVoiceMessage(groupId, file, duration);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
            mediaPlayer.release();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("file url error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    public void sendGroupVoiceMessageWithExtras(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String voiceUrlStr = data.getString(1);
            String json = data.getString(2);

            Conversation conversation = JMessageClient.getGroupConversation(groupId);
            if (conversation == null) {
                conversation = Conversation.createGroupConversation(groupId);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }

            requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);

            URL url = new URL(voiceUrlStr);
            String voicePath = url.getPath();
            File file = new File(voicePath);

            MediaPlayer mediaPlayer = MediaPlayer.create(this.cordova.getActivity(),
                    Uri.parse(voicePath));
            int duration = mediaPlayer.getDuration();

            VoiceContent content = new VoiceContent(file, duration);
            if (!TextUtils.isEmpty(json)) {
                content.setExtras(getExtras(json));
            }

            final Message msg = JMessageClient.createGroupVoiceMessage(groupId, file, duration);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
            mediaPlayer.release();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("json data error");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            callback.error("file url error");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("file not found.");
        }
    }

    /**
     * @param data     JSONArray.
     *                 data.getLong(0):groupID, data.getJSONObject(1):custom key-values.
     * @param callback CallbackContext.
     */
    public void sendGroupCustomMessage(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);

            Conversation con = JMessageClient.getGroupConversation(groupId);
            if (con == null) {
                con = Conversation.createGroupConversation(groupId);
            }
            if (con == null) {
                callback.error("无法建立对话");
                return;
            }

            String jsonStr = data.getString(1);
            JSONObject customValues = new JSONObject(jsonStr);
            Iterator<? extends String> keys = customValues.keys();
            String key, value;
            Map<String, String> valuesMap = new HashMap<String, String>();
            while (keys.hasNext()) {
                key = keys.next();
                value = customValues.getString(key);
                valuesMap.put(key, value);
            }
            final Message msg = JMessageClient.createGroupCustomMessage(groupId, valuesMap);
            msg.setOnSendCompleteCallback(new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success(mGson.toJson(msg));
                    } else {
                        callback.error(status + ": " + desc);
                    }
                }
            });
            JMessageClient.sendMessage(msg);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json.");
        }
    }

    public void sendGroupLocationMessage(JSONArray data, final CallbackContext callback) {
        long groupId;
        double latitude;
        double longitude;
        int scale;
        String address;

        try {
            groupId = data.getLong(0);
            latitude = data.getDouble(1);
            longitude = data.getDouble(2);
            scale = data.getInt(3);
            address = data.getString(4);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        Message msg = JMessageClient.createGroupLocationMessage(groupId,
                latitude, longitude, scale, address);
        final String json = mGson.toJson(msg);
        msg.setOnSendCompleteCallback(new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success(json);
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });

        JMessageClient.sendMessage(msg);
    }

    public void sendGroupFileMessage(JSONArray data, final CallbackContext callback) {
        long groupId;
        String path;
        String fileName;

        try {
            groupId = data.getLong(0);
            path = data.getString(1);
            fileName = data.isNull(2) ? "" : data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        if (TextUtils.isEmpty(path)) {
            callback.error("Path is empty.");
            return;
        }
        File file = new File(path);

        Message msg;
        try {
            msg = JMessageClient.createGroupFileMessage(groupId, file, fileName);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            callback.error("File not found.");
            return;
        } catch (JMFileSizeExceedException e) {
            e.printStackTrace();
            callback.error("File size is too large.");
            return;
        }

        final String json = mGson.toJson(msg);
        msg.setOnSendCompleteCallback(new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success(json);
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });

        JMessageClient.sendMessage(msg);
    }

    public void getLatestMessage(JSONArray data, CallbackContext callback) {
        String conversationType;
        String value;
        String appKey;

        try {
            conversationType = data.getString(0);
            value = data.getString(1);
            appKey = data.isNull(2) ? "" : data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
            return;
        }

        Conversation conversation = getConversation(conversationType, value, appKey);
        if (conversation == null) {
            callback.error("Conversation is not exist.");
            return;
        }

        Message msg = conversation.getLatestMessage();
        if (msg != null) {
            try {
                JSONObject msgJson = getMessageJSONObject(msg);
                callback.success(msgJson.toString());
            } catch (JSONException e) {
                e.printStackTrace();
            }
        } else {
            callback.success("");
        }
    }

    public void getHistoryMessages(JSONArray data, CallbackContext callback) {
        int from = 0, limit = 0;
        Conversation conversation = null;

        try {
            String conversationType = data.getString(0);
            if (conversationType.equals("single")) {
                String username = data.getString(1);
                String appKey = data.isNull(2) ? "" : data.getString(2);
                conversation = JMessageClient.getSingleConversation(username, appKey);
                if (conversation == null) {
                    callback.error("Conversation is not exist.");
                    return;
                }
            } else if (conversationType.equals("group")) {
                long groupId = data.getLong(1);
                conversation = JMessageClient.getGroupConversation(groupId);
                if (conversation == null) {
                    conversation = Conversation.createGroupConversation(groupId);
                }
            } else {
                callback.error("Conversation type error.");
                return;
            }

            from = data.getInt(3);
            limit = data.getInt(4);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }

        if (conversation == null) {
            callback.error("Can't get the conversation, please check your parameters.");
            return;
        }

        List<Message> messages = conversation.getMessagesFromNewest(from, limit);
        if (!messages.isEmpty()) {
            JSONArray msgJsonArr = new JSONArray();
            try {
                for (Message msg : messages) {
                    msgJsonArr.put(getMessageJSONObject(msg));
                }
            } catch (JSONException e) {
                e.printStackTrace();
                callback.error(e.getMessage());
            }
            callback.success(msgJsonArr.toString());
        } else {
            callback.success("");
        }
    }

    public void getAllMessages(JSONArray data, CallbackContext callback) {
        try {
            String type = data.getString(0);
            Conversation conversation;
            if (type.equals("single")) {
                String username = data.getString(1);
                String appKey = data.isNull(2) ? "" : data.getString(2);
                conversation = JMessageClient.getSingleConversation(username, appKey);
                if (conversation == null) {
                    callback.error("Conversation is not exist.");
                    return;
                }
            } else if (type.equals("group")) {
                long groupId = data.getLong(1);
                conversation = JMessageClient.getGroupConversation(groupId);
                if (conversation == null) {
                    conversation = Conversation.createGroupConversation(groupId);
                }
            } else {
                callback.error("Conversation type error.");
                return;
            }

            List<Message> messages = conversation.getAllMessage();
            if (messages != null && !messages.isEmpty()) {
                JSONArray msgJsonArr = new JSONArray();
                for (Message msg : messages) {
                    msgJsonArr.put(getMessageJSONObject(msg));
                }
                callback.success(msgJsonArr.toString());
            } else {
                callback.success("");
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    // Conversation API.
    public void createSingleConversation(JSONArray data, CallbackContext callback) {
        String username;
        String appKey;

        try {
            username = data.getString(0);
            appKey = data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        Conversation con;
        if (TextUtils.isEmpty(appKey)) {
            con = Conversation.createSingleConversation(username);
        } else {
            con = Conversation.createSingleConversation(username, appKey);
        }

        String json = "";
        if (con != null) {
            json = mGson.toJson(con);
        }
        callback.success(json);
    }

    public void createGroupConversation(JSONArray data, CallbackContext callback) {
        long groupId;

        try {
            groupId = data.getInt(0);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
            return;
        }

        Conversation con = Conversation.createGroupConversation(groupId);

        String json = "";
        if (con != null) {
            json = mGson.toJson(con);
        }
        callback.success(json);
    }

    public void isSingleConversationExist(JSONArray data, CallbackContext callback) {
        try {
            String username = data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);
            Conversation con = JMessageClient.getSingleConversation(username, appKey);
            if (con == null) {
                callback.success(0);
            } else {
                callback.success(1);
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void isGroupConversationExist(JSONArray data, CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            Conversation con = JMessageClient.getGroupConversation(groupId);
            if (con == null) {
                callback.success(0);
            } else {
                callback.success(1);
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getConversationList(JSONArray data, CallbackContext callback) {
        try {
            List<Conversation> conversationList = JMessageClient.getConversationList();

            if (conversationList != null) {
                JSONArray conArr = new JSONArray();
                JSONObject conJson;
                for (Conversation con : conversationList) {
                    conJson = new JSONObject(mGson.toJson(con));
                    if (conJson.isNull("latestMessage") && con.getLatestMessage() != null) {
                        Message latestMsg = con.getLatestMessage();
                        JSONObject msgJson = new JSONObject(mGson.toJson(latestMsg));
                        if (latestMsg.getContentType() == ContentType.eventNotification) {
                            EventNotificationContent content = ((EventNotificationContent) latestMsg.getContent());
                            List<String> usernameList = content.getUserNames();
                            msgJson.put("username", mGson.toJson(usernameList));
                        }
                        conJson.put("latestMessage", msgJson);
                    }
                    conArr.put(conJson);
                }
                callback.success(conArr.toString());
            } else {
                callback.success("");
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    // 设置会话本地未读消息数的接口。
    public void setSingleConversationUnreadMessageCount(JSONArray data, CallbackContext
            callback) {
        try {
            String username = data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);
            int unreadMessageCount = data.getInt(2);
            Conversation con = JMessageClient.getSingleConversation(username, appKey);
            if (con == null) {
                callback.error("Conversation is not exist.");
                return;
            }
            con.setUnReadMessageCnt(unreadMessageCount);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void setGroupConversationUnreadMessageCount(JSONArray data, CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            int unreadMessageCount = data.getInt(1);
            Conversation con = JMessageClient.getGroupConversation(groupId);
            if (con == null) {
                callback.error("Conversation is not exist.");
                return;
            }
            con.setUnReadMessageCnt(unreadMessageCount);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void enterSingleConversation(JSONArray data, CallbackContext callback) {
        try {
            String username = data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);
            JMessageClient.enterSingleConversation(username, appKey);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void enterGroupConversation(JSONArray data, CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            JMessageClient.enterGroupConversation(groupId);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getSingleConversation(JSONArray data, CallbackContext callback) {
        String username;
        String appKey;
        try {
            username = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        Conversation conversation = JMessageClient.getSingleConversation(username, appKey);

        String json = "";
        if (conversation != null) {
            json = mGson.toJson(conversation);
        }
        callback.success(json);
    }

    public void getGroupConversation(JSONArray data, CallbackContext callback) {
        long groupId;
        try {
            groupId = data.getLong(0);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
            return;
        }

        Conversation conversation = JMessageClient.getGroupConversation(groupId);

        String json = "";
        if (conversation != null) {
            json = mGson.toJson(conversation);
        }

        callback.success(json);
    }

    public void deleteSingleConversation(JSONArray data, CallbackContext callback) {
        try {
            String username = data.getString(0);
            String appKey = data.isNull(1) ? "" : data.getString(1);
            boolean result;
            if (TextUtils.isEmpty(appKey)) {
                result = JMessageClient.deleteSingleConversation(username);
            } else {
                result = JMessageClient.deleteSingleConversation(username, appKey);
            }
            if (result) {
                callback.success();
            } else {
                callback.error("Delete fail.");
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void deleteGroupConversation(JSONArray data, CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            boolean result = JMessageClient.deleteGroupConversation(groupId);
            if (result) {
                callback.success();
            } else {
                callback.error("Delete fail.");
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void exitConversation(JSONArray data, CallbackContext callback) {
        try {
            JMessageClient.exitConversation();
            callback.success();
        } catch (Exception exception) {
            callback.error(exception.toString());
        }
    }

    // Group API.

    public void createGroup(JSONArray data, final CallbackContext callback) {
        try {
            String groupName = data.getString(0);
            String groupDesc = data.getString(1);
            String usernameStr = data.isNull(2) ? "" : data.getString(2);

            final List<String> usernameList = new ArrayList<String>();
            if (!TextUtils.isEmpty(usernameStr)) {
                String[] usernameArr = usernameStr.split(",");
                Collections.addAll(usernameList, usernameArr);
            }

            JMessageClient.createGroup(groupName, groupDesc,
                    new CreateGroupCallback() {
                        @Override
                        public void gotResult(int responseCode, String responseMsg, final long groupId) {
                            if (responseCode == 0) {
                                if (!usernameList.isEmpty()) {
                                    JMessageClient.addGroupMembers(groupId, usernameList, new BasicCallback() {
                                        @Override
                                        public void gotResult(int status, String desc) {
                                            if (status == 0) {
                                                callback.success(String.valueOf(groupId));
                                            } else {
                                                callback.error(status);
                                            }
                                        }
                                    });
                                } else {
                                    callback.success(String.valueOf(groupId));
                                }
                            } else {
                                callback.error(responseCode);
                            }
                        }
                    });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getGroupIDList(JSONArray data, final CallbackContext callback) {
        JMessageClient.getGroupIDList(new GetGroupIDListCallback() {
            @Override
            public void gotResult(int responseCode, String responseMsg, List<Long> list) {
                if (responseCode == 0) {
                    callback.success(mGson.toJson(list));
                } else {
                    callback.error(responseCode);
                }
            }
        });
    }

    public void getGroupInfo(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            JMessageClient.getGroupInfo(groupId, new GetGroupInfoCallback() {
                @Override
                public void gotResult(int responseCode, String responseMsg,
                                      GroupInfo groupInfo) {
                    if (responseCode == 0) {
                        callback.success(mGson.toJson(groupInfo));
                    } else {
                        callback.error(responseCode);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void updateGroupName(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String groupNewName = data.getString(1);

            JMessageClient.updateGroupName(groupId, groupNewName,
                    new BasicCallback() {
                        @Override
                        public void gotResult(int responseCode, String responseDesc) {
                            if (responseCode == 0) {
                                callback.success();
                            } else {
                                callback.error(responseCode);
                            }
                        }
                    });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void updateGroupDescription(JSONArray data,
                                       final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String groupNewDesc = data.getString(1);

            JMessageClient.updateGroupDescription(groupId, groupNewDesc,
                    new BasicCallback() {
                        @Override
                        public void gotResult(int responseCode, String responseMsg) {
                            if (responseCode == 0) {
                                callback.success();
                            } else {
                                callback.error(responseMsg);
                            }
                        }
                    });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void addGroupMembers(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String[] members = (String[]) data.get(1);

            List<String> memberList = new ArrayList<String>();
            Collections.addAll(memberList, members);
            JMessageClient.addGroupMembers(groupId, memberList,
                    new BasicCallback() {
                        @Override
                        public void gotResult(int responseCode, String responseDesc) {
                            if (responseCode == 0) {
                                callback.success();
                            } else {
                                callback.error(responseDesc);
                            }
                        }
                    });

        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void addGroupMembersCrossApp(JSONArray data, final CallbackContext callback) {
        long groupId;
        String appKey;
        String memberListStr;
        List<String> memberList = new ArrayList<String>();

        try {
            groupId = data.getLong(0);
            appKey = data.getString(1);
            memberListStr = data.getString(2);

            if (!TextUtils.isEmpty(memberListStr)) {
                Collections.addAll(memberList, memberListStr.split(","));
            }

        } catch (JSONException e) {
            e.printStackTrace();
            return;
        }

        JMessageClient.addGroupMembers(groupId, appKey, memberList, new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {  // 成功
                    callback.success();
                } else {
                    callback.error(status);
                }
            }
        });
    }

    public void removeGroupMembers(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            String userNamesStr = data.getString(1);
            String[] userNamesArr = userNamesStr.split(",");

            List<String> userNamesList = Arrays.asList(userNamesArr);
            JMessageClient.removeGroupMembers(groupId, userNamesList,
                    new BasicCallback() {
                        @Override
                        public void gotResult(int responseCode, String responseDesc) {
                            if (responseCode == 0) {
                                callback.success();
                            } else {
                                callback.error(responseDesc);
                            }
                        }
                    });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public void removeGroupMembersCrossApp(JSONArray data, final CallbackContext callback) {
        long groupId;
        String appKey;
        String memberListStr;
        List<String> memberList = new ArrayList<String>();

        try {
            groupId = data.getLong(0);
            appKey = data.getString(1);
            memberListStr = data.getString(2);

            if (!TextUtils.isEmpty(memberListStr)) {
                Collections.addAll(memberList, memberListStr.split(","));
            }

        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("JSON error.");
            return;
        }

        JMessageClient.removeGroupMembers(groupId, appKey, memberList, new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {  // 成功
                    callback.success();
                } else {
                    callback.error(status);
                }
            }
        });
    }

    public void exitGroup(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            JMessageClient.exitGroup(groupId, new BasicCallback() {
                @Override
                public void gotResult(int responseCode, String responseDesc) {
                    if (responseCode == 0) {
                        callback.success();
                    } else {
                        callback.error(responseDesc);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getGroupMembers(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            JMessageClient.getGroupMembers(groupId, new GetGroupMembersCallback() {
                @Override
                public void gotResult(int responseCode, String responseDesc,
                                      List<UserInfo> list) {
                    if (responseCode == 0) {
                        String json = new Gson().toJson(list);
                        callback.success(json);
                    } else {
                        callback.error(responseDesc);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getGroupMemberInfo(JSONArray data, final CallbackContext callback) {
        long groupId;
        final String appKey;
        final String username;

        try {
            groupId = data.getLong(0);
            appKey = data.getString(1);
            username = data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("JSON error.");
            return;
        }

        JMessageClient.getGroupInfo(groupId, new GetGroupInfoCallback() {
            @Override
            public void gotResult(int status, String desc, GroupInfo groupInfo) {
                if (status == 0) {
                    UserInfo userInfo = groupInfo.getGroupMemberInfo(username, appKey);
                    try {
                        if (userInfo != null) {
                            callback.success(getUserInfoJsonObject(userInfo));
                        } else {
                            callback.success("");
                        }
                    } catch (JSONException e) {
                        e.printStackTrace();
                        callback.error("JSON error");
                    }
                } else {
                    callback.error(status);
                }
            }
        });
    }

    // 好友关系相关 API

    /**
     * 发送添加好友请求。
     */
    public void sendInvitationRequest(JSONArray data, final CallbackContext callback) {
        String username;
        String appKey;
        String reason;

        try {
            username = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
            reason = data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        ContactManager.sendInvitationRequest(username, appKey, reason, new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success();
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    public void acceptInvitation(JSONArray data, final CallbackContext callback) {
        String targetUsername;  // 发送邀请方的用户
        String appKey;          // 发送邀请方的用户 AppKey

        try {
            targetUsername = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        ContactManager.acceptInvitation(targetUsername, appKey, new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success();
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    public void declineInvitation(JSONArray data, final CallbackContext callback) {
        String targetUsername;  // 邀请方的用户名
        String appKey;          // 邀请方用户的 appKey
        String reason;          // 拒接理由

        try {
            targetUsername = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
            reason = data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        ContactManager.declineInvitation(targetUsername, appKey, reason, new BasicCallback() {
            @Override
            public void gotResult(int status, String desc) {
                if (status == 0) {
                    callback.success();
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    /**
     * 获取当前登录用户的好友列表。
     */
    public void getFriendList(JSONArray data, final CallbackContext callback) {
        ContactManager.getFriendList(new GetUserInfoListCallback() {
            @Override
            public void gotResult(int status, String desc, List<UserInfo> list) {
                if (status == 0) {
                    String json = mGson.toJson(list);
                    callback.success(json);
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    public void removeFromFriendList(JSONArray data, final CallbackContext callback) {
        String username;
        String appKey;

        try {
            username = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        JMessageClient.getUserInfo(username, appKey, new GetUserInfoCallback() {
            @Override
            public void gotResult(int status, String desc, UserInfo userInfo) {
                if (status == 0) {
                    userInfo.removeFromFriendList(new BasicCallback() {
                        @Override
                        public void gotResult(int status, String desc) {
                            if (status == 0) {
                                callback.success();
                            } else {
                                callback.error(status + ": " + desc);
                            }
                        }
                    });
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    public void updateFriendNoteName(JSONArray data, final CallbackContext callback) {
        final String friendName;
        String appKey;
        final String noteName;

        try {
            friendName = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
            noteName = data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error");
            return;
        }

        JMessageClient.getUserInfo(friendName, appKey, new GetUserInfoCallback() {
            @Override
            public void gotResult(int status, String desc, UserInfo userInfo) {
                if (status == 0) {
                    userInfo.updateNoteName(noteName, new BasicCallback() {
                        @Override
                        public void gotResult(int status, String desc) {
                            if (status == 0) {
                                callback.success();
                            } else {
                                callback.error(status + ": " + desc);
                            }
                        }
                    });
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    // 更新好友备注信息
    public void updateFriendNoteText(JSONArray data, final CallbackContext callback) {
        String friendName;
        String appKey;
        final String noteText;

        try {
            friendName = data.getString(0);
            appKey = data.isNull(1) ? "" : data.getString(1);
            noteText = data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameters error.");
            return;
        }

        JMessageClient.getUserInfo(friendName, appKey, new GetUserInfoCallback() {
            @Override
            public void gotResult(int status, String desc, UserInfo userInfo) {
                if (status == 0) {
                    userInfo.updateNoteText(noteText, new BasicCallback() {
                        @Override
                        public void gotResult(int status, String desc) {
                            if (status == 0) {
                                callback.success();
                            } else {
                                callback.error(status + ": " + desc);
                            }
                        }
                    });
                } else {
                    callback.error(status + ": " + desc);
                }
            }
        });
    }

    // Black list API.
    public void addUsersToBlacklist(JSONArray data, final CallbackContext callback) {
        try {
            String usernameStr = data.getString(0);
            if (TextUtils.isEmpty(usernameStr)) {
                callback.error("Username is empty.");
                return;
            }
            String[] usernameArr = usernameStr.split(",");
            List<String> usernameList = Arrays.asList(usernameArr);
            String appKey = data.isNull(1) ? "" : data.getString(1);

            JMessageClient.addUsersToBlacklist(usernameList, appKey, new BasicCallback() {
                @Override
                public void gotResult(int responseCode, String responseDesc) {
                    if (responseCode == 0) {
                        callback.success();
                    } else {
                        callback.error(responseDesc);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void delUsersFromBlacklist(JSONArray data, final CallbackContext callback) {
        try {
            String usernameStr = data.getString(0);
            if (TextUtils.isEmpty(usernameStr)) {
                callback.error("Username is empty.");
                return;
            }
            String[] usernameArr = usernameStr.split(",");
            List<String> usernameList = Arrays.asList(usernameArr);
            String appKey = data.isNull(1) ? "" : data.getString(1);

            JMessageClient.delUsersFromBlacklist(usernameList, appKey, new BasicCallback() {
                @Override
                public void gotResult(int responseCode, String responseDesc) {
                    if (responseCode == 0) {
                        callback.success();
                    } else {
                        callback.error(responseDesc);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    public void getBlacklist(JSONArray data, final CallbackContext callback) {
        JMessageClient.getBlacklist(new GetBlacklistCallback() {
            @Override
            public void gotResult(int responseCode, String responseDesc, List<UserInfo> list) {
                if (responseCode == 0) {
                    callback.success(mGson.toJson(list));
                } else {
                    callback.error(responseDesc);
                }
            }
        });
    }

    public void setNotificationMode(JSONArray data, CallbackContext callback) {
        try {
            int mode = data.getInt(0);
            JMessageClient.setNotificationMode(mode);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Parameter error.");
        }
    }

    /**
     * 取到图片消息的图片原图。
     */
    public void getOriginImageInSingleConversation(JSONArray data,
                                                   final CallbackContext callback) {
        String username;
        long msgId;
        String appKey;

        try {
            username = data.getString(0);
            msgId = data.getLong(1);
            appKey = data.isNull(2) ? "" : data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
            return;
        }

        Conversation con = JMessageClient.getSingleConversation(username, appKey);
        if (con == null) {
            callback.error("Conversation isn't exist.");
            return;
        }

        List<Message> messageList = con.getAllMessage();
        for (Message msg : messageList) {
            if (!msg.getContentType().equals(ContentType.image)) {
                continue;
            }
            if (msgId == msg.getServerMessageId()) {
                ImageContent imgContent = (ImageContent) msg.getContent();
                if (!TextUtils.isEmpty(imgContent.getLocalPath())) {
                    callback.success(imgContent.getLocalPath());
                    return;
                }
                imgContent.downloadOriginImage(msg, new DownloadCompletionCallback() {
                    @Override
                    public void onComplete(int status, String desc, File file) {
                        if (status == 0) {
                            callback.success(file.getAbsolutePath());
                        } else {
                            callback.error(status);
                        }
                    }
                });
            }
        }
    }

    public void getOriginImageInGroupConversation(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            long msgId = data.getLong(1);

            Conversation con = JMessageClient.getGroupConversation(groupId);
            if (con == null) {
                callback.error("Conversation isn't exist.");
                return;
            }

            List<Message> messageList = con.getAllMessage();
            for (Message msg : messageList) {
                if (!msg.getContentType().equals(ContentType.image)) {
                    continue;
                }
                if (msgId == msg.getServerMessageId()) {
                    ImageContent imgContent = (ImageContent) msg.getContent();
                    if (!TextUtils.isEmpty(imgContent.getLocalPath())) {
                        callback.success(imgContent.getLocalPath());
                        return;
                    }
                    imgContent.downloadOriginImage(msg, new DownloadCompletionCallback() {
                        @Override
                        public void onComplete(int status, String desc, File file) {
                            if (status == 0) {
                                callback.success(file.getAbsolutePath());
                            } else {
                                callback.error(status);
                            }
                        }
                    });
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
        }
    }

    public void downloadVoiceFileInSingleConversation(JSONArray data, final CallbackContext callback) {
        String username;
        long msgId;
        String appKey;

        try {
            username = data.getString(0);
            msgId = data.getLong(1);
            appKey = data.isNull(2) ? "" : data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
            return;
        }

        Conversation con = JMessageClient.getSingleConversation(username, appKey);
        if (con == null) {
            callback.error("Conversation isn't exist.");
            return;
        }

        List<Message> messageList = con.getAllMessage();
        for (Message msg : messageList) {
            if (!msg.getContentType().equals(ContentType.voice)) {
                continue;
            }
            if (msgId == msg.getServerMessageId()) {
                VoiceContent content = (VoiceContent) msg.getContent();
                if (!TextUtils.isEmpty(content.getLocalPath())) {
                    callback.success(content.getLocalPath());
                    return;
                }
                content.downloadVoiceFile(msg, new DownloadCompletionCallback() {
                    @Override
                    public void onComplete(int status, String desc, File file) {
                        if (status == 0) {
                            callback.success(file.getAbsolutePath());
                        } else {
                            callback.error(status);
                        }
                    }
                });
            }
        }
    }

    public void downloadVoiceFileInGroupConversation(JSONArray data, final CallbackContext callback) {
        long groupId;
        long msgId;
        try {
            groupId = data.getLong(0);
            msgId = data.getLong(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
            return;
        }

        Conversation con = JMessageClient.getGroupConversation(groupId);
        if (con == null) {
            callback.error("Conversation isn't exist.");
            return;
        }

        List<Message> messageList = con.getAllMessage();
        for (Message msg : messageList) {
            if (!msg.getContentType().equals(ContentType.voice)) {
                continue;
            }
            if (msgId == msg.getServerMessageId()) {
                VoiceContent content = (VoiceContent) msg.getContent();
                if (!TextUtils.isEmpty(content.getLocalPath())) {
                    callback.success(content.getLocalPath());
                    return;
                }
                content.downloadVoiceFile(msg, new DownloadCompletionCallback() {
                    @Override
                    public void onComplete(int status, String desc, File file) {
                        if (status == 0) {
                            callback.success(file.getAbsolutePath());
                        } else {
                            callback.error(status);
                        }
                    }
                });
            }
        }
    }

    public void downloadFileInSingleConversation(JSONArray data, final CallbackContext callback) {
        String username;
        long msgId;
        String appKey;

        try {
            username = data.getString(0);
            msgId = data.getLong(1);
            appKey = data.isNull(2) ? "" : data.getString(2);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
            return;
        }

        Conversation con = JMessageClient.getSingleConversation(username, appKey);
        if (con == null) {
            callback.error("Conversation isn't exist.");
            return;
        }

        List<Message> messageList = con.getAllMessage();
        for (Message msg : messageList) {
            if (!msg.getContentType().equals(ContentType.file)) {
                continue;
            }
            if (msgId == msg.getServerMessageId()) {
                FileContent content = (FileContent) msg.getContent();
                if (!TextUtils.isEmpty(content.getLocalPath())) {
                    callback.success(content.getLocalPath());
                    return;
                }
                content.downloadFile(msg, new DownloadCompletionCallback() {
                    @Override
                    public void onComplete(int status, String desc, File file) {
                        if (status == 0) {
                            callback.success(file.getAbsolutePath());
                        } else {
                            callback.error(status);
                        }
                    }
                });
            }
        }
    }

    public void downloadFileInGroupConversation(JSONArray data, final CallbackContext callback) {
        long groupId;
        long msgId;
        try {
            groupId = data.getLong(0);
            msgId = data.getLong(1);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Argument error.");
            return;
        }

        Conversation con = JMessageClient.getGroupConversation(groupId);
        if (con == null) {
            callback.error("Conversation isn't exist.");
            return;
        }

        List<Message> messageList = con.getAllMessage();
        for (Message msg : messageList) {
            if (!msg.getContentType().equals(ContentType.file)) {
                continue;
            }
            if (msgId == msg.getServerMessageId()) {
                FileContent content = (FileContent) msg.getContent();
                if (!TextUtils.isEmpty(content.getLocalPath())) {
                    callback.success(content.getLocalPath());
                    return;
                }
                content.downloadFile(msg, new DownloadCompletionCallback() {
                    @Override
                    public void onComplete(int status, String desc, File file) {
                        if (status == 0) {
                            callback.success(file.getAbsolutePath());
                        } else {
                            callback.error(status);
                        }
                    }
                });
            }
        }
    }

    public void getSingleConversationHistoryMessage(JSONArray data, CallbackContext callback) {
        try {
            String username = data.getString(0);
            int from = data.getInt(1);
            int limit = data.getInt(2);

            if (limit <= 0 || from < 0) {
                return;
            }
            Conversation conversation = JMessageClient.getSingleConversation(username);
            if (conversation == null) {
                conversation = Conversation.createSingleConversation(username);
            }
            if (conversation == null) {
                callback.error("无法创建对话");
                return;
            }
            List<Message> list = conversation.getMessagesFromNewest(from, limit);

            JSONArray jsonResult = new JSONArray();
            for (int i = 0; i < list.size(); ++i) {
                Message msg = list.get(i);
                JSONObject obj = getMessageJSONObject(msg);
                jsonResult.put(obj);
            }
            callback.success(jsonResult);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("error reading id json.");
        }
    }

    public void getAllSingleConversation(JSONArray data, CallbackContext callback) {
        try {
            List<Conversation> list = JMessageClient.getConversationList();

            JSONArray jsonArr = new JSONArray();
            JSONObject jsonObj;
            for (Conversation con : list) {
                if (con.getType() == ConversationType.single) {
                    jsonObj = new JSONObject(mGson.toJson(con));
                    Message latestMsg = con.getLatestMessage();
                    if (!jsonObj.has("latestMessage")) {
                        JSONObject msgJson = new JSONObject(mGson.toJson(latestMsg));
                        jsonObj.put("latestMessage", msgJson);
                    }
                    jsonArr.put(jsonObj);
                }
            }
            callback.success(jsonArr.toString());
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.getMessage());
        }
    }

    public void getAllGroupConversation(JSONArray data, CallbackContext callback) {
        List<Conversation> list = JMessageClient.getConversationList();

        JSONArray jsonArr = new JSONArray();
        JSONObject jsonObj;

        try {
            for (Conversation con : list) {
                if (con.getType() == ConversationType.group) {
                    jsonObj = new JSONObject(mGson.toJson(con));
                    Message latestMsg = con.getLatestMessage();
                    if (!jsonObj.has("latestMessage")) {
                        JSONObject msgJson = new JSONObject(mGson.toJson(latestMsg));
                        jsonObj.put("latestMessage", msgJson);
                    }
                    jsonArr.put(jsonObj);
                }
            }
            callback.success(jsonArr.toString());
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.getMessage());
        }
    }

    public void requestPermission(JSONArray data, CallbackContext callback) {
        try {
            String permission = data.getString(0);
            requestPermission(permission);
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.toString());
        }
    }

    // 免打扰 API

    /**
     * 设置是否对目标用户免打扰。
     *
     * @param data: data.getString(0): 目标用户的 username。
     *              data.getInt(1): isNoDisturb, 0 - 解除免打扰，1 - 免打扰。
     */
    public void setUserNoDisturb(JSONArray data, final CallbackContext callback) {
        try {
            String username = data.getString(0);
            final int isNoDisturb = data.getInt(1);

            JMessageClient.getUserInfo(username, new GetUserInfoCallback() {
                @Override
                public void gotResult(int status, String desc, UserInfo userInfo) {
                    if (status == 0) {
                        userInfo.setNoDisturb(isNoDisturb, new BasicCallback() {
                            @Override
                            public void gotResult(int status, String desc) {
                                if (status == 0) {
                                    callback.success();
                                } else {
                                    callback.error(status);
                                }
                            }
                        });
                    } else {
                        callback.error(status); // 返回错误码。
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.toString());
        }
    }

    /**
     * 设置群组免打扰。
     */
    public void setGroupNoDisturb(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);
            final int isNoDisturb = data.getInt(1);

            JMessageClient.getGroupInfo(groupId, new GetGroupInfoCallback() {
                @Override
                public void gotResult(int status, String desc, GroupInfo groupInfo) {
                    if (status == 0) {
                        groupInfo.setNoDisturb(isNoDisturb, new BasicCallback() {
                            @Override
                            public void gotResult(int status, String desc) {
                                if (status == 0) {
                                    callback.success();
                                } else {
                                    callback.error(status);
                                }
                            }
                        });
                    } else {
                        callback.error(status);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取指定用户的免打扰状态。
     */
    public void getUserNoDisturb(JSONArray data, final CallbackContext callback) {
        try {
            String username = data.getString(0);

            JMessageClient.getUserInfo(username, new GetUserInfoCallback() {
                @Override
                public void gotResult(int status, String desc, UserInfo userInfo) {
                    if (status == 0) {
                        callback.success(userInfo.getNoDisturb());
                    } else {
                        callback.error(status);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取指定群组的免打扰状态。
     */
    public void getGroupNoDisturb(JSONArray data, final CallbackContext callback) {
        try {
            long groupId = data.getLong(0);

            JMessageClient.getGroupInfo(groupId, new GetGroupInfoCallback() {
                @Override
                public void gotResult(int status, String desc, GroupInfo groupInfo) {
                    if (status == 0) {
                        callback.success(groupInfo.getNoDisturb());
                    } else {
                        callback.error(status);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    // 获取免打扰列表。
    public void getNoDisturbList(JSONArray data, final CallbackContext callback) {
        JMessageClient.getNoDisturblist(new GetNoDisurbListCallback() {
            @Override
            public void gotResult(int status, String desc, List<UserInfo> userList,
                                  List<GroupInfo> groupList) {
                if (status == 0) {
                    JSONObject json = new JSONObject();
                    try {
                        json.put("userList", mGson.toJson(userList));
                        json.put("groupList", mGson.toJson(groupList));
                        callback.success(json);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                } else {
                    callback.error(status);
                }
            }
        });
    }

    /**
     * 设置全局免打扰。0：正常状态，1：免打扰状态。
     */
    public void setNoDisturbGlobal(JSONArray data, final CallbackContext callback) {
        try {
            int isNoDisturbGlobal = data.getInt(0);
            JMessageClient.setNoDisturbGlobal(isNoDisturbGlobal, new BasicCallback() {
                @Override
                public void gotResult(int status, String desc) {
                    if (status == 0) {
                        callback.success();
                    } else {
                        callback.error(status);
                    }
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取当前的全局免打扰状态。
     */
    public void getNoDisturbGlobal(JSONArray data, final CallbackContext callback) {
        JMessageClient.getNoDisturbGlobal(new IntegerCallback() {
            @Override
            public void gotResult(int status, String desc, Integer integer) {
                if (status == 0) {
                    callback.success(integer);
                } else {
                    callback.error(status);
                }
            }
        });
    }

    /**
     * @param type   会话类型，'single' or 'group'。
     * @param value  会话的唯一标识，如果类型为 'single' 则为 username；
     *               如果类型为 'group' 则为 groupId。
     * @param appKey 如果会话类型为 'single'，可以通过该属性获得跨应用会话。
     * @return
     */
    private Conversation getConversation(String type, String value, String appKey) {
        Conversation conversation;
        if (type.equals("single")) {
            conversation = JMessageClient.getSingleConversation(value, appKey);
        } else if (type.equals("group")) {
            long groupId = Long.parseLong(value);
            conversation = JMessageClient.getGroupConversation(groupId);
        } else {
            return null;
        }
        return conversation;
    }

    private void handleResult(String successString, int status, String desc, CallbackContext
            callback) {
        if (status == 0) {
            if (TextUtils.isEmpty(successString)) {
                callback.success();
            } else {
                callback.success(successString);
            }
        } else {
            callback.error(desc);
        }
    }

    private String updateUserInfo(UserInfo userInfo, String field, String value) {
        final String[] result = {null};

        if (field.equals("nickname")) {
            userInfo.setNickname(value);
        } else if (field.equals("birthday")) {
            long birthday = Long.parseLong(value);
            userInfo.setBirthday(birthday);
        } else if (field.equals("gender")) {
            if (value.equals("male")) {
                userInfo.setGender(UserInfo.Gender.male);
            } else if (value.equals("female")) {
                userInfo.setGender(UserInfo.Gender.female);

            } else {
                userInfo.setGender(UserInfo.Gender.unknown);
            }
        } else if (field.equals("signature")) {
            userInfo.setSignature(value);
        } else if (field.equals("region")) {
            userInfo.setRegion(value);
        } else {
            return "Field name error.";
        }

        JMessageClient.updateMyInfo(UserInfo.Field.valueOf(field), userInfo,
                new BasicCallback() {
                    @Override
                    public void gotResult(int responseCode, String responseDesc) {
                        if (responseCode != 0) {
                            result[0] = responseDesc;
                        }
                    }
                });
        return result[0];
    }

    private String getFilePath() {
        return Environment.getExternalStorageDirectory() + "/"
                + cordova.getActivity().getApplication().getPackageName();
    }

    private String getAvatarPath() {
        return getFilePath() + "/images/avatar/";
    }

    private String storeImage(Bitmap bitmap, String filename) {
        File avatarFile = new File(getAvatarPath());
        if (!avatarFile.exists()) {
            avatarFile.mkdirs();
        }

        String filePath = getAvatarPath() + filename + ".png";
        try {
            FileOutputStream fos = new FileOutputStream(filePath);
            BufferedOutputStream bos = new BufferedOutputStream(fos);
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, bos);
            bos.flush();
            bos.close();
            return filePath;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return "";
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }

    private JSONObject getMessageJSONObject(Message msg) throws JSONException {
        String jsonStr = mGson.toJson(msg);
        final JSONObject msgJson = new JSONObject(jsonStr);

        if (ContentType.eventNotification != msg.getContentType()) {
            // Add user avatar path.
            UserInfo fromUser = msg.getFromUser();
            String avatarPath = "";
            File avatarFile = fromUser.getAvatarFile();
            if (avatarFile != null) {
                avatarPath = avatarFile.getAbsolutePath();
            }

            if (msgJson.isNull("fromUser")) {
                msgJson.put("fromUser", new JSONObject(mGson.toJson(fromUser)));
            }
            msgJson.getJSONObject("fromUser").put("avatarPath", avatarPath);
            msgJson.put("fromName", fromUser.getUserName());
            msgJson.put("fromNickname", fromUser.getNickname());
            msgJson.put("fromID", fromUser.getUserID());
        }

        UserInfo myInfo = JMessageClient.getMyInfo();
        String myInfoJson = mGson.toJson(myInfo);
        JSONObject myInfoJsonObj = new JSONObject(myInfoJson);

        File myAvatarFile = JMessageClient.getMyInfo().getAvatarFile();
        String myAvatarPath = "";
        if (myAvatarFile != null) {
            myAvatarPath = myAvatarFile.getAbsolutePath();
        }
        myInfoJsonObj.put("avatarPath", myAvatarPath);
        msgJson.put("targetInfo", myInfoJsonObj);

        switch (msg.getContentType()) {
            case image:
                break;
            case voice:
                VoiceContent voiceContent = (VoiceContent) msg.getContent();
                String voicePath = voiceContent.getLocalPath();
                int duration = voiceContent.getDuration();
                msgJson.getJSONObject("content").put("voicePath", voicePath);
                msgJson.getJSONObject("content").put("duration", duration);
                break;
            case custom:
                break;
            case eventNotification:
                EventNotificationContent content = (EventNotificationContent) msg.getContent();
                List<String> usernameList = content.getUserNames();
                if (usernameList != null) {
                    msgJson.put("username", mGson.toJson(usernameList));
                }
                break;
            default:
        }
        return msgJson;
    }

    private Map<String, String> getExtras(String json) throws JSONException {
        JSONObject values = new JSONObject(json);
        Iterator<? extends String> keys = values.keys();
        Map<String, String> valuesMap = new HashMap<String, String>();

        String key, value;
        while (keys.hasNext()) {
            key = keys.next();
            value = values.getString(key);
            valuesMap.put(key, value);
        }
        return valuesMap;
    }

    private JSONObject getUserInfoJsonObject(UserInfo userInfo) throws JSONException {
        String json = mGson.toJson(userInfo);
        JSONObject jsonObject = new JSONObject(json);
        String avatarPath = "";
        if (userInfo.getAvatarFile() != null) {
            avatarPath = userInfo.getAvatarFile().getAbsolutePath();
        }
        jsonObject.put("avatarPath", avatarPath);
        jsonObject.put("noteName", userInfo.getNotename());
        jsonObject.put("noteText", userInfo.getNoteText());
        jsonObject.put("isFriend", userInfo.isFriend());

        Log.i(TAG, jsonObject.toString());

        return jsonObject;
    }

    private void requestPermission(String permission) {
        if (Build.VERSION.SDK_INT >= 23) {
            cordova.requestPermission(this, 1, permission);
        }
    }
}