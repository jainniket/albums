package com.reactnativeboilerplate.kitlauncher;


import tv.hooq.android.kit.HooqAgent;
import tv.hooq.android.kit.HooqAgentListener;
import tv.hooq.android.kit.ErrorInfo;
import tv.hooq.android.kit.ums.Account;
import tv.hooq.android.kit.ums.AccountIDType;
import tv.hooq.android.kit.ums.UMSAgent;
import tv.hooq.android.kit.ums.UMSAgentListener;

import tv.hooq.android.kit.catalog.CatalogAgent;
import tv.hooq.android.kit.catalog.CatalogChainedRequest;
import tv.hooq.android.kit.catalog.CatalogPaginatedRequest;
import tv.hooq.android.kit.catalog.CatalogRequest;
import tv.hooq.android.kit.catalog.CatalogResponse;
import tv.hooq.android.kit.catalog.CatalogResponseListener;
import tv.hooq.android.kit.catalog.FilterableCatalogResponse;
import tv.hooq.android.kit.catalog.FilterablePaginatedCatalogRequest;
import tv.hooq.android.kit.catalog.model.Scope;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.Context;


public class KitLauncherModule extends ReactContextBaseJavaModule {

  private static Context context = null;
  private CatalogAgent catalogAgent;
  private CatalogChainedRequest cachedFeedReq = null;
  private static HooqAgent hAgent = null;

  public KitLauncherModule(ReactApplicationContext reactContext) {
      super(reactContext);
      context = reactContext.getApplicationContext();
  }

  @Override
  public String getName() {
      return "KitLauncher";
  }

  @ReactMethod
  public void createInstance(String filePath) {
    hAgent = HooqAgent.createInstance(context, filePath);
  }

  @ReactMethod
  public void getInstance(Callback instanceCb) {
    final Callback onPreparedCallback = instanceCb;
    hAgent = HooqAgent.getInstance();
    onPreparedCallback.invoke(hAgent);
  }

  @ReactMethod
  public void associateByEmail(String email, boolean isOffline) {

    final Account emailAccount = HooqAgent.getInstance().getUMSAgent().getAccount( AccountIDType.EMAIL, email);
    if (emailAccount == null) {
      return;
    }
    HooqAgent.getInstance().associate(emailAccount, isOffline);
  }

  @ReactMethod
  public void associateByMobile(String mobile, boolean isOffline) {

    final Account mobileAccount = HooqAgent.getInstance().getUMSAgent().getAccount( AccountIDType.PHONE, mobile);
    if (mobileAccount == null) {
      return;
    }
    HooqAgent.getInstance().associate(mobileAccount, isOffline);
  }

  @ReactMethod
  public void createUserByEmail(String email, Callback createUserCb) {
    final Callback onPreparedCallback = createUserCb;
    try {
      AccountIDType accountIDType = AccountIDType.EMAIL;
      HooqAgent.getInstance().getUMSAgent().createAccount(accountIDType, email);
      onPreparedCallback.invoke(true);
    }
    catch(Exception e) {
      onPreparedCallback.invoke(false);
      throw e;
    }
  }

  @ReactMethod
  public void createUserByMobile(String mobile, Callback createUserCb) {
    final Callback onPreparedCallback = createUserCb;
    /* The country Code for phone number will be internally set by the player-kit based on
    * user's current country
    */
    try {
      AccountIDType accountIDType = AccountIDType.PHONE;
      HooqAgent.getInstance().getUMSAgent().createAccount(accountIDType, mobile);
      onPreparedCallback.invoke(true);
    }
    catch(Exception e) {
      onPreparedCallback.invoke(false);
      throw e;
    }
  }

  @ReactMethod
  public void getAccountByEmail(String email, Callback accountDetailsCb) {
    final Callback onPreparedCallback = accountDetailsCb;
    try {
      AccountIDType accountIDType = AccountIDType.EMAIL;
      final Account account = HooqAgent.getInstance().getUMSAgent().getAccount(accountIDType, email);
      onPreparedCallback.invoke(account);
    }
    catch(Exception e) {
      throw e;
    }
  }

  @ReactMethod
  public void getAccountByMobile(String mobile, Callback accountDetailsCb) {
    final Callback onPreparedCallback = accountDetailsCb;
    try {
      AccountIDType accountIDType = AccountIDType.PHONE;
      final Account account = HooqAgent.getInstance().getUMSAgent().getAccount(accountIDType, mobile);
      onPreparedCallback.invoke(account);
    }
    catch(Exception e) {
      throw e;
    }
  }

  @ReactMethod
  public void search(String query, Callback sendResultCb) {
    final Callback onPreparedCallback = sendResultCb;
    catalogAgent = HooqAgent.getInstance().getCatalogAgent();
    catalogAgent
      .getSearchItemsBuilder(query)
      .setPageSize(8)
      .addScope(Scope.ALL)
      .setResponseListener(new CatalogResponseListener<FilterablePaginatedCatalogRequest, FilterableCatalogResponse>() {
          @Override
          protected void onResponse(FilterablePaginatedCatalogRequest request, FilterableCatalogResponse response) {
              StringBuilder builder = new StringBuilder("[")
                      .append(response.getAvailableGenres().toString())
                      .append(",")
                      .append(response.getAvailableLanguages().toString())
                      .append("]");
              onPreparedCallback.invoke(response.getRawResponse());
          }

          @Override
          protected void onNetworkFailure(FilterablePaginatedCatalogRequest request) {
              onPreparedCallback.invoke("FAIL");
          }

          @Override
          protected void onFailure(FilterablePaginatedCatalogRequest request, ErrorInfo errorInfo) {
            onPreparedCallback.invoke(errorInfo);
          }
      }).build().invoke();
  }
}
