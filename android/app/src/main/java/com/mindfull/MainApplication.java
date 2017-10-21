package com.mindfull;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.horcrux.svg.SvgPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

import io.realm.react.RealmReactPackage;

public class MainApplication extends NavigationApplication implements ReactApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new SvgPackage(),
            new LinearGradientPackage(),
            new RealmReactPackage()
    );
  }


  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      // Add the packages you require here.
      // No need to add RnnPackage and MainReactPackage
      return Arrays.<ReactPackage>asList(
              new SvgPackage(),
              new LinearGradientPackage(),
              new RealmReactPackage()
      );
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
