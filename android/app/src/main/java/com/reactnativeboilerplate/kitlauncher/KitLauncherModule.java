package com.reactnativeboilerplate.kitlauncher;


import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

import android.widget.Toast;

import tv.hooq.android.kit.HooqAgent;

public class KitLauncherModule extends ReactContextBaseJavaModule {

    public KitLauncherModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
        HooqAgent.createInstance(getReactApplicationContext(), "QP_Config.json");
    }

    @Override
    public String getName() {
        return "KitLauncher";
    }
}
