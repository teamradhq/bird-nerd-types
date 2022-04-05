/// <reference path="./App.d.ts" />
/// <reference path="./Data.d.ts" />
/// <reference path="./JSON.d.ts" />

declare module BirdNerd {
  interface PrefixOptions {
    prefix?: string,
    suffix?: string,
    value: string,
  }

  interface PageEntry {
    path: string,
    title: string,
    key: string,
    Component?: React.FC
  }
}

