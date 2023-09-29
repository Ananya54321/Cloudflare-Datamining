import React from 'react';
import IconComponents from './reactsvgs';
export declare type IconType = keyof typeof IconComponents;
declare const _default: React.ComponentType<{
    type: "search" | "link" | "script" | "time" | "filter" | "image" | "right" | "none" | "download" | "list" | "version" | "key" | "left" | "revert" | "copy" | "help" | "add" | "subtract" | "pause" | "dlp" | "account-analytics-logo" | "add-member" | "api-security" | "api" | "applications" | "backward" | "bolt" | "byoip" | "calendar" | "carbon" | "caret-double-left" | "caret-double-right" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "case-study" | "chart" | "clipboard" | "cloudflare-access" | "cloudflare-dex" | "cloudflare-magic-wan" | "cloudflare-security-application" | "cloudflare-security-network" | "cloudflare-zero-trust" | "credit-card" | "d1" | "ddos-attack" | "discord" | "discover" | "documentation" | "drive" | "edgeworker" | "edit" | "email-forwarding" | "exclamation-sign" | "external-link" | "eye" | "facebook" | "file" | "firewall-rules" | "flowchart" | "folder" | "forward" | "funnel" | "gateway" | "gear" | "git-branch" | "github" | "globe" | "hamburger" | "home" | "info-sign" | "internet-browser" | "leaf" | "linkedin" | "lock" | "logs" | "magic-firewall" | "magic-transit-logo" | "mail" | "minus" | "more" | "network-analytics-logo" | "network-security" | "network" | "notifications" | "office-branch" | "ok-sign" | "ok" | "optimization-scale" | "pages-logo" | "platform-apps" | "plus" | "printer" | "product-security-center" | "pub-sub" | "pull-request" | "queues" | "r2" | "refresh" | "registrar-logo" | "reliability-dns" | "reliability-load-balancer" | "remove" | "reorder" | "resize-horizontal" | "retarget" | "security-bots" | "security-waf" | "shield" | "spectrum" | "speech" | "star-outline" | "star" | "stream" | "tail-worker" | "teams" | "terraform" | "trace" | "traffic-attack-browser" | "turnstile" | "twitter" | "two-way" | "unlock-outline" | "upload" | "user-multi" | "user-outline" | "user" | "waiting-room" | "web-analytics-logo" | "web3" | "workers-bundled" | "workers-constellation" | "workers-durable-objects" | "workers-for-platforms" | "workers-kv" | "workers-pages" | "workers-unbound" | "wrangler" | "wrench" | "youtube" | "zaraz" | "zerotrust-casb-logo" | "zerotrust-networks-logo";
    className?: string | undefined;
    ariaLabel?: string | undefined;
    label?: string | boolean | undefined;
    testId?: string | undefined;
    p?: import("csstype").PaddingProperty<string | number> | [import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined] | [import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined] | undefined;
    color?: ((string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined]) & string) | undefined;
    borderColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    height?: import("csstype").HeightProperty<string | number> | [import("csstype").HeightProperty<string | number> | undefined, import("csstype").HeightProperty<string | number> | undefined] | [import("csstype").HeightProperty<string | number> | undefined, import("csstype").HeightProperty<string | number> | undefined, import("csstype").HeightProperty<string | number> | undefined] | undefined;
    width?: import("csstype").WidthProperty<string | number> | [import("csstype").WidthProperty<string | number> | undefined, import("csstype").WidthProperty<string | number> | undefined] | [import("csstype").WidthProperty<string | number> | undefined, import("csstype").WidthProperty<string | number> | undefined, import("csstype").WidthProperty<string | number> | undefined] | undefined;
    cursor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    display?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    fontSize?: import("csstype").FontSizeProperty<string | number> | [import("csstype").FontSizeProperty<string | number> | undefined, import("csstype").FontSizeProperty<string | number> | undefined] | [import("csstype").FontSizeProperty<string | number> | undefined, import("csstype").FontSizeProperty<string | number> | undefined, import("csstype").FontSizeProperty<string | number> | undefined] | undefined;
    fontWeight?: import("csstype").FontWeightProperty | [import("csstype").FontWeightProperty | undefined, import("csstype").FontWeightProperty | undefined] | [import("csstype").FontWeightProperty | undefined, import("csstype").FontWeightProperty | undefined, import("csstype").FontWeightProperty | undefined] | undefined;
    textDecoration?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    margin?: import("csstype").MarginProperty<string | number> | [import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined] | [import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined] | undefined;
    marginLeft?: import("csstype").MarginLeftProperty<string | number> | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | undefined;
    marginRight?: import("csstype").MarginRightProperty<string | number> | [import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined] | [import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined] | undefined;
    marginTop?: import("csstype").MarginTopProperty<string | number> | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | undefined;
    marginBottom?: import("csstype").MarginBottomProperty<string | number> | [import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined] | [import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined] | undefined;
    padding?: import("csstype").PaddingProperty<string | number> | [import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined] | [import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined, import("csstype").PaddingProperty<string | number> | undefined] | undefined;
    paddingLeft?: import("csstype").PaddingLeftProperty<string | number> | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | undefined;
    paddingRight?: import("csstype").PaddingRightProperty<string | number> | [import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined] | [import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined] | undefined;
    paddingTop?: import("csstype").PaddingTopProperty<string | number> | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | undefined;
    paddingBottom?: import("csstype").PaddingBottomProperty<string | number> | [import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined] | [import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined] | undefined;
    gap?: import("csstype").GapProperty<string | number> | [import("csstype").GapProperty<string | number> | undefined, import("csstype").GapProperty<string | number> | undefined] | [import("csstype").GapProperty<string | number> | undefined, import("csstype").GapProperty<string | number> | undefined, import("csstype").GapProperty<string | number> | undefined] | undefined;
    m?: import("csstype").MarginProperty<string | number> | [import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined] | [import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined, import("csstype").MarginProperty<string | number> | undefined] | undefined;
    ml?: import("csstype").MarginLeftProperty<string | number> | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | undefined;
    mr?: import("csstype").MarginRightProperty<string | number> | [import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined] | [import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined, import("csstype").MarginRightProperty<string | number> | undefined] | undefined;
    mt?: import("csstype").MarginTopProperty<string | number> | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | undefined;
    mb?: import("csstype").MarginBottomProperty<string | number> | [import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined] | [import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined, import("csstype").MarginBottomProperty<string | number> | undefined] | undefined;
    mx?: import("csstype").MarginLeftProperty<string | number> | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | [import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined, import("csstype").MarginLeftProperty<string | number> | undefined] | undefined;
    my?: import("csstype").MarginTopProperty<string | number> | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | [import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined, import("csstype").MarginTopProperty<string | number> | undefined] | undefined;
    pl?: import("csstype").PaddingLeftProperty<string | number> | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | undefined;
    pr?: import("csstype").PaddingRightProperty<string | number> | [import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined] | [import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined, import("csstype").PaddingRightProperty<string | number> | undefined] | undefined;
    pt?: import("csstype").PaddingTopProperty<string | number> | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | undefined;
    pb?: import("csstype").PaddingBottomProperty<string | number> | [import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined] | [import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined, import("csstype").PaddingBottomProperty<string | number> | undefined] | undefined;
    px?: import("csstype").PaddingLeftProperty<string | number> | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | [import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined, import("csstype").PaddingLeftProperty<string | number> | undefined] | undefined;
    py?: import("csstype").PaddingTopProperty<string | number> | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | [import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined, import("csstype").PaddingTopProperty<string | number> | undefined] | undefined;
    minWidth?: import("csstype").MinWidthProperty<string | number> | [import("csstype").MinWidthProperty<string | number> | undefined, import("csstype").MinWidthProperty<string | number> | undefined] | [import("csstype").MinWidthProperty<string | number> | undefined, import("csstype").MinWidthProperty<string | number> | undefined, import("csstype").MinWidthProperty<string | number> | undefined] | undefined;
    minHeight?: import("csstype").MinHeightProperty<string | number> | [import("csstype").MinHeightProperty<string | number> | undefined, import("csstype").MinHeightProperty<string | number> | undefined] | [import("csstype").MinHeightProperty<string | number> | undefined, import("csstype").MinHeightProperty<string | number> | undefined, import("csstype").MinHeightProperty<string | number> | undefined] | undefined;
    maxWidth?: import("csstype").MaxWidthProperty<string | number> | [import("csstype").MaxWidthProperty<string | number> | undefined, import("csstype").MaxWidthProperty<string | number> | undefined] | [import("csstype").MaxWidthProperty<string | number> | undefined, import("csstype").MaxWidthProperty<string | number> | undefined, import("csstype").MaxWidthProperty<string | number> | undefined] | undefined;
    maxHeight?: import("csstype").MaxHeightProperty<string | number> | [import("csstype").MaxHeightProperty<string | number> | undefined, import("csstype").MaxHeightProperty<string | number> | undefined] | [import("csstype").MaxHeightProperty<string | number> | undefined, import("csstype").MaxHeightProperty<string | number> | undefined, import("csstype").MaxHeightProperty<string | number> | undefined] | undefined;
    backgroundColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderLeftColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderRightColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderTopColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderBottomColor?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderStyle?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    borderTopStyle?: import("csstype").BorderTopStyleProperty | [import("csstype").BorderTopStyleProperty | undefined, import("csstype").BorderTopStyleProperty | undefined] | [import("csstype").BorderTopStyleProperty | undefined, import("csstype").BorderTopStyleProperty | undefined, import("csstype").BorderTopStyleProperty | undefined] | undefined;
    borderBottomStyle?: import("csstype").BorderBottomStyleProperty | [import("csstype").BorderBottomStyleProperty | undefined, import("csstype").BorderBottomStyleProperty | undefined] | [import("csstype").BorderBottomStyleProperty | undefined, import("csstype").BorderBottomStyleProperty | undefined, import("csstype").BorderBottomStyleProperty | undefined] | undefined;
    borderLeftStyle?: import("csstype").BorderLeftStyleProperty | [import("csstype").BorderLeftStyleProperty | undefined, import("csstype").BorderLeftStyleProperty | undefined] | [import("csstype").BorderLeftStyleProperty | undefined, import("csstype").BorderLeftStyleProperty | undefined, import("csstype").BorderLeftStyleProperty | undefined] | undefined;
    borderRightStyle?: import("csstype").BorderRightStyleProperty | [import("csstype").BorderRightStyleProperty | undefined, import("csstype").BorderRightStyleProperty | undefined] | [import("csstype").BorderRightStyleProperty | undefined, import("csstype").BorderRightStyleProperty | undefined, import("csstype").BorderRightStyleProperty | undefined] | undefined;
    borderWidth?: import("csstype").BorderWidthProperty<string | number> | [import("csstype").BorderWidthProperty<string | number> | undefined, import("csstype").BorderWidthProperty<string | number> | undefined] | [import("csstype").BorderWidthProperty<string | number> | undefined, import("csstype").BorderWidthProperty<string | number> | undefined, import("csstype").BorderWidthProperty<string | number> | undefined] | undefined;
    borderTopWidth?: import("csstype").BorderTopWidthProperty<string | number> | [import("csstype").BorderTopWidthProperty<string | number> | undefined, import("csstype").BorderTopWidthProperty<string | number> | undefined] | [import("csstype").BorderTopWidthProperty<string | number> | undefined, import("csstype").BorderTopWidthProperty<string | number> | undefined, import("csstype").BorderTopWidthProperty<string | number> | undefined] | undefined;
    borderBottomWidth?: import("csstype").BorderBottomWidthProperty<string | number> | [import("csstype").BorderBottomWidthProperty<string | number> | undefined, import("csstype").BorderBottomWidthProperty<string | number> | undefined] | [import("csstype").BorderBottomWidthProperty<string | number> | undefined, import("csstype").BorderBottomWidthProperty<string | number> | undefined, import("csstype").BorderBottomWidthProperty<string | number> | undefined] | undefined;
    borderLeftWidth?: import("csstype").BorderLeftWidthProperty<string | number> | [import("csstype").BorderLeftWidthProperty<string | number> | undefined, import("csstype").BorderLeftWidthProperty<string | number> | undefined] | [import("csstype").BorderLeftWidthProperty<string | number> | undefined, import("csstype").BorderLeftWidthProperty<string | number> | undefined, import("csstype").BorderLeftWidthProperty<string | number> | undefined] | undefined;
    borderRightWidth?: import("csstype").BorderRightWidthProperty<string | number> | [import("csstype").BorderRightWidthProperty<string | number> | undefined, import("csstype").BorderRightWidthProperty<string | number> | undefined] | [import("csstype").BorderRightWidthProperty<string | number> | undefined, import("csstype").BorderRightWidthProperty<string | number> | undefined, import("csstype").BorderRightWidthProperty<string | number> | undefined] | undefined;
    borderRadius?: import("csstype").BorderRadiusProperty<string | number> | [import("csstype").BorderRadiusProperty<string | number> | undefined, import("csstype").BorderRadiusProperty<string | number> | undefined] | [import("csstype").BorderRadiusProperty<string | number> | undefined, import("csstype").BorderRadiusProperty<string | number> | undefined, import("csstype").BorderRadiusProperty<string | number> | undefined] | undefined;
    borderTopLeftRadius?: import("csstype").BorderTopLeftRadiusProperty<string | number> | [import("csstype").BorderTopLeftRadiusProperty<string | number> | undefined, import("csstype").BorderTopLeftRadiusProperty<string | number> | undefined] | [import("csstype").BorderTopLeftRadiusProperty<string | number> | undefined, import("csstype").BorderTopLeftRadiusProperty<string | number> | undefined, import("csstype").BorderTopLeftRadiusProperty<string | number> | undefined] | undefined;
    borderTopRightRadius?: import("csstype").BorderTopRightRadiusProperty<string | number> | [import("csstype").BorderTopRightRadiusProperty<string | number> | undefined, import("csstype").BorderTopRightRadiusProperty<string | number> | undefined] | [import("csstype").BorderTopRightRadiusProperty<string | number> | undefined, import("csstype").BorderTopRightRadiusProperty<string | number> | undefined, import("csstype").BorderTopRightRadiusProperty<string | number> | undefined] | undefined;
    borderBottomLeftRadius?: import("csstype").BorderBottomLeftRadiusProperty<string | number> | [import("csstype").BorderBottomLeftRadiusProperty<string | number> | undefined, import("csstype").BorderBottomLeftRadiusProperty<string | number> | undefined] | [import("csstype").BorderBottomLeftRadiusProperty<string | number> | undefined, import("csstype").BorderBottomLeftRadiusProperty<string | number> | undefined, import("csstype").BorderBottomLeftRadiusProperty<string | number> | undefined] | undefined;
    borderbottomRightRadius?: ([never, never] | [never, never, never]) | undefined;
    textAlign?: import("csstype").TextAlignProperty | [import("csstype").TextAlignProperty | undefined, import("csstype").TextAlignProperty | undefined] | [import("csstype").TextAlignProperty | undefined, import("csstype").TextAlignProperty | undefined, import("csstype").TextAlignProperty | undefined] | undefined;
    verticalAlign?: import("csstype").VerticalAlignProperty<string | number> | [import("csstype").VerticalAlignProperty<string | number> | undefined, import("csstype").VerticalAlignProperty<string | number> | undefined] | [import("csstype").VerticalAlignProperty<string | number> | undefined, import("csstype").VerticalAlignProperty<string | number> | undefined, import("csstype").VerticalAlignProperty<string | number> | undefined] | undefined;
    alignItems?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    alignSelf?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    justifyContent?: string | [string | undefined, string | undefined] | [string | undefined, string | undefined, string | undefined] | undefined;
    textTransform?: import("csstype").TextTransformProperty | [import("csstype").TextTransformProperty | undefined, import("csstype").TextTransformProperty | undefined] | [import("csstype").TextTransformProperty | undefined, import("csstype").TextTransformProperty | undefined, import("csstype").TextTransformProperty | undefined] | undefined;
    boxSizing?: import("csstype").BoxSizingProperty | [import("csstype").BoxSizingProperty | undefined, import("csstype").BoxSizingProperty | undefined] | [import("csstype").BoxSizingProperty | undefined, import("csstype").BoxSizingProperty | undefined, import("csstype").BoxSizingProperty | undefined] | undefined;
    flexDirection?: import("csstype").FlexDirectionProperty | [import("csstype").FlexDirectionProperty | undefined, import("csstype").FlexDirectionProperty | undefined] | [import("csstype").FlexDirectionProperty | undefined, import("csstype").FlexDirectionProperty | undefined, import("csstype").FlexDirectionProperty | undefined] | undefined;
    flexBasis?: import("csstype").FlexBasisProperty<string | number> | [import("csstype").FlexBasisProperty<string | number> | undefined, import("csstype").FlexBasisProperty<string | number> | undefined] | [import("csstype").FlexBasisProperty<string | number> | undefined, import("csstype").FlexBasisProperty<string | number> | undefined, import("csstype").FlexBasisProperty<string | number> | undefined] | undefined;
    flexGrow?: import("csstype").GlobalsNumber | [import("csstype").GlobalsNumber | undefined, import("csstype").GlobalsNumber | undefined] | [import("csstype").GlobalsNumber | undefined, import("csstype").GlobalsNumber | undefined, import("csstype").GlobalsNumber | undefined] | undefined;
    gridTemplateColumns?: import("csstype").GridTemplateColumnsProperty<string | number> | [import("csstype").GridTemplateColumnsProperty<string | number> | undefined, import("csstype").GridTemplateColumnsProperty<string | number> | undefined] | [import("csstype").GridTemplateColumnsProperty<string | number> | undefined, import("csstype").GridTemplateColumnsProperty<string | number> | undefined, import("csstype").GridTemplateColumnsProperty<string | number> | undefined] | undefined;
    size?: number | undefined;
    innerRef?: React.Ref<never> | undefined;
    gridColumnSpan?: number | number[] | "end" | "all" | undefined;
    gridColumnPad?: number | number[] | undefined;
    gridRowSpan?: number | number[] | undefined;
    gridRowPad?: number | number[] | undefined;
    gridAlign?: ("start" | "end" | "center" | "stretch") | undefined;
    gridJustify?: ("start" | "end" | "center" | "stretch") | undefined;
}>;
export default _default;
