package com.learnenglish070220;

import com.facebook.react.ReactActivity;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.os.Bundle; // here
import android.util.Base64;
import android.util.Log;

import org.devio.rn.splashscreen.SplashScreen; // here

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this,R.style.SplashScreenTheme);  // here
        super.onCreate(savedInstanceState);
   }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "LearnEnglish070220";
  }
}
