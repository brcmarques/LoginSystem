/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signin/page` | `/signin/page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup/page` | `/signup/page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(panel)'}/profile/page` | `/profile/page`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signin/page` | `/signin/page`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signup/page` | `/signup/page`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(panel)'}/profile/page` | `/profile/page`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signin/page${`?${string}` | `#${string}` | ''}` | `/signin/page${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signup/page${`?${string}` | `#${string}` | ''}` | `/signup/page${`?${string}` | `#${string}` | ''}` | `${'/(panel)'}/profile/page${`?${string}` | `#${string}` | ''}` | `/profile/page${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signin/page` | `/signin/page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup/page` | `/signup/page`; params?: Router.UnknownInputParams; } | { pathname: `${'/(panel)'}/profile/page` | `/profile/page`; params?: Router.UnknownInputParams; };
    }
  }
}
