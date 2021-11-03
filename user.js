// Disable about:config warning
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);

// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// Disable telemetry coverage
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable health reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable new data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable first run report
user_pref("datareporting.policy.firstRunURL", "");

// Disable studies
user_pref("app.shield.optoutstudies.enabled", false);

// Disable personalized addons recommendations
user_pref("browser.discovery.enabled", false);

// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// Disable backlogged Crash Reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable Captive Portal detection (phoning home)
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable Network Connectivity checks
user_pref("network.connectivity-service.enabled", false);

// Enforce blocklist
user_pref("extensions.blocklist.enabled", true);

// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

// Disable activity stream shit
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);

// Clear default top sites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Disable geolocation services
user_pref("geo.enabled", false);
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

// Disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

// Set preferred languages for web pages
user_pref("intl.accept_languages", "en-US, en");

// Disable automatic updates
user_pref("app.update.auto", false);

// Disable sending Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable sending the URL of the website where a plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Disable addons recommendations
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable Normandy/Shield (telemetry system  that can also push and test "recipes")
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable System Add-on updates
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");

// Disable PingCentre telemetry (used in several System Add-ons)
user_pref("browser.ping-centre.telemetry", false);

// Disable form AutoFill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Web Compatibility Reporter ("Report Site Issue" button to send data to Mozilla)
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable prefetching/auditing/tracking
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false);

// Display all parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", false);

// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// Configure suggestions in the url bar
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.engines", false);

// Disable location bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable location bar leaking single words to a DNS provider **after searching**
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// Disable form history
user_pref("browser.formfill.enable", false);

// Disable browsing and download history
// user_pref("places.history.enabled", false);

// Disable Windows taskbar preview (on windows)
user_pref("browser.taskbar.previews.enable", false);

// Disable saving passwords
user_pref("signon.rememberSignons", false);

// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);

// Disable formless login capture for Password Manager
user_pref("signon.formlessCapture.enabled", false);

// Disable page breach alerts
user_pref("signon.management.page.breach-alerts.enabled", false);

// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources (hardens against potential credentials phishing)
user_pref("network.auth.subresource-http-auth-allow", 1);

// Require safe negotiation (blocks connections to servers that don't support RFC 5746 as they're potentially vulnerable to a MiTM attack)
user_pref("security.ssl.require_safe_negotiation", true);

// Enforce TLS 1.0 and 1.1 downgrades as session only
user_pref("security.tls.version.enable-deprecated", false);

// Disable SSL session tracking
user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]

// Disable SSL Error Reporting
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// Disable TLS1.3 0-RTT (round-trip time)
user_pref("security.tls.enable_0rtt_data", false);

// Enable OCSP Stapling
user_pref("security.ssl.enable_ocsp_stapling", true);

// Control when to use OCSP fetching (to confirm current validity of certificates)
user_pref("security.OCSP.enabled", 1);

// Set OCSP fetch failures to hard-fail
// user_pref("security.OCSP.require", true);

// Disable or limit SHA-1 certificates
user_pref("security.pki.sha1_enforcement_level", 1);

// Disable Windows 8.1's Microsoft Family Safety cert
user_pref("security.family_safety.mode", 0);

// Enforce strict pinning (to disallow MiTM such as AV)
user_pref("security.cert_pinning.enforcement_level", 2);

// Enforce CRLite
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

// Enforce no insecure active content on https pages
user_pref("security.mixed_content.block_active_content", true);

// Disable insecure passive content (such as images) on https pages
// user_pref("security.mixed_content.block_display_content", true);

// Block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks
user_pref("security.mixed_content.block_object_subrequest", true);

// Enable HTTPS-Only mode
user_pref("dom.security.https_only_mode", true);

// Disable HTTP background requests
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// Display warning on the padlock for "broken security" (if 1201 is false)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Control "Add Security Exception" dialog on SSL warnings
user_pref("browser.ssl_override_behavior", 1);

// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Display "insecure" icon and "Not Secure" text on HTTP sites
user_pref("security.insecure_connection_text.enabled", true);

// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// Disable graphite
user_pref("gfx.font_rendering.graphite.enabled", false);

// CROSS ORIGIN: control when to send a referer (only if hosts match)
// user_pref("network.http.referer.XOriginPolicy", 2);

// CROSS ORIGIN: control the amount of information to send (scheme+host+port)
// user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// ALL: enable the DNT (Do Not Track) HTTP header
user_pref("privacy.donottrackheader.enabled", true);

// Enable Container Tabs setting in preferences
// user_pref("privacy.userContext.ui.enabled", true);

// Enable Container Tabs
// user_pref("privacy.userContext.enabled", true);

// Disable Flash plugin
user_pref("plugin.state.flash", 0);

// Disable widevine CDM (Content Decryption Module)
// user_pref("media.gmp-widevinecdm.visible", false);
// user_pref("media.gmp-widevinecdm.enabled", false);

// Disable all DRM content (EME: Encryption Media Extension)
// user_pref("media.eme.enabled", false);

// Disable WebRTC (Web Real-Time Communication) (may leak IP even behind the VPN)
// user_pref("media.peerconnection.enabled", false);

// Limit WebRTC IP leaks if using WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Disable speech synthesis
user_pref("media.webspeech.synth.enabled", false);

// Disable WebGL (Web Graphics Library)
// user_pref("webgl.disabled", true);
// user_pref("webgl.enable-webgl2", false);

// Limit WebGL
// user_pref("webgl.min_capability_mode", true);
// user_pref("webgl.disable-fail-if-major-performance-caveat", true);

// Disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// Set a default permission for Camera/Microphone (0=always ask (default), 1=allow, 2=block)
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);

// Disable autoplay of HTML5 media (0=Allow all, 1=Block non-muted media (default in FF67+), 2=Prompt (removed in FF66), 5=Block all (FF69+))
user_pref("media.autoplay.default", 5);

// Disable autoplay of HTML5 media if you interacted with the site (0=sticky (default), 1=transient, 2=user)
user_pref("media.autoplay.blocking_policy", 2);

// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// Open links targeting new windows in a new tab instead (1=most recent window or tab 2=new window, 3=new tab)
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Block popup windows
user_pref("dom.disable_open_during_load", true);

// Limit events that can cause a popup
user_pref("dom.popup_allowed_events", "click dblclick");

// Disable Push Notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// Set a default permission for Notifications  (0=always ask (default), 1=allow, 2=block)
user_pref("permissions.default.desktop-notification", 2);

// Disable media device enumeration
// user_pref("media.navigator.enabled", false);

// Disable virtual reality devices
user_pref("dom.vr.enabled", false);

// Disable battery status
user_pref("dom.battery.enabled", false);

// Disable USB devices
user_pref("dom.gamepad.enabled", false);

// Set a default permission for Virtual Reality (0=always ask (default), 1=allow, 2=block)
user_pref("permissions.default.xr", 2);

// Prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 1);

 // Disable contacting settings server
user_pref("services.settings.server", "");

// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);

// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Disable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);

// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false);

// Remove special permissions for certain mozilla domains
user_pref("permissions.manager.defaultsUrl", "");

// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");

// Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);

// Enforce Firefox's built-in PDF reader
user_pref("pdfjs.disabled", false);

// Disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
user_pref("network.protocol-handler.external.ms-windows-store", false);

// Enforce no system colors; they can be fingerprinted
user_pref("browser.display.use_system_colors", false);

// Disable permissions delegation [FF73+]
user_pref("permissions.delegation.enabled", false);

// Enable "window.name" protection [FF82+]
user_pref("privacy.window.name.update.enabled", true);

// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// Disable hiding mime types (Options>General>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);

// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.autoDisableScopes", 15);

// Enforce CSP (Content Security Policy)
user_pref("security.csp.enable", true);

// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 700);

// Disable 3rd-party cookies and site-data (0=Accept cookies and site data, 1=(Block) All third-party cookies, 2=(Block) All cookies, 3=(Block) Cookies from unvisited websites, 4=(Block) Cross-site and social media trackers (default))
user_pref("network.cookie.cookieBehavior", 4);
user_pref("browser.contentblocking.category", "custom");

// Disable tracking protection (redundant with uBlock0)
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Enforce no offline cache storage (appCache)
user_pref("browser.cache.offline.storage.enable", false);

// Enable Local Storage Next Generation (LSNG)
user_pref("dom.storage.next_gen", true);

// Disable showing about:blank as soon as possible during startup
user_pref("browser.startup.blankWindow", false);

// Welcome & What's New notices
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
user_pref("browser.aboutHomeSnippets.updateUrl", "") // Home snippets
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New panel in the menu

// Customize homepage (BTFO everything)
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.activity-stream.showSearch", false); // Web search
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Top sites
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Highlights
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Snippets

// Disable fullscreen warnings
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Disable smooth fullscreen transition
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

// Allow userChrome and userContent
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable backspace on pages
user_pref("browser.backspace_action", 2);

// Open bookmarks in a new tab
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Copy non-latin links correctly
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Disable hardware media keys
user_pref("media.hardwaremediakeys.enabled", false);

// Disable recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.api", "");

// Disable sync
user_pref("identity.fxaccounts.enabled", false);

// Enable webrender
user_pref("gfx.webrender.all", true);

// Don't show close button on the inactive tabs
user_pref("browser.tabs.tabClipWidth", 100000);

// Set tab's minimal width
user_pref("browser.tabs.tabMinWidth", 150);

// Tab key behavior in forms
//   1 : Text field form controls only
//   2 : All form controls except text fields
//   3 : All form controls
//   4 : Hyperlinks and hyperlinked images
//   7 : All form controls and hyperlinks
user_pref("accessibility.tabfocus", 3);

// Disable PDF viewing
user_pref("pdfjs.disabled", true);

// Disable delay for buttons when downloading files
user_pref("security.dialog_enable_delay", 0);

// Instantly scroll to where on middle mouse button
user_pref("middlemouse.scrollbarPosition", true);

// Search highlighting
user_pref("findbar.highlightAll", true);
// user_pref("findbar.modalHighlight", true);

// Disable reader
user_pref("reader.parse-on-load.enabled", false);

// Enable compact density
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// Disable Mozilla VPN ads
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.newtabpage.activity-stream.asrouter.disable-captive-portal-vpn-promo", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");

// UI fix requirements
user_pref("browser.proton.enabled", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
// Scrolling options
//         Pref                                              Value                 Original
user_pref("apz.allow_zooming",                               true);            ///     true
user_pref("apz.force_disable_desktop_zooming_scrollbars",   false);            ///    false
user_pref("apz.paint_skipping.enabled",                      true);            ///     true
user_pref("apz.windows.use_direct_manipulation",             true);            ///     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);            ///    false
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15");            ///   "0.25" <- 1. If scroll too fast, set to "0.12"
user_pref("general.smoothScroll.durationToIntervalRatio",    1000);            ///      200
user_pref("general.smoothScroll.lines.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.lines.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",    100);            ///      200
user_pref("general.smoothScroll.mouseWheel.durationMinMS",      0);            ///       50
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);            ///      100
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);   ///      120
user_pref("general.smoothScroll.msdPhysics.enabled",                  true);   ///    false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);   ///     1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",     200);   ///     1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         10);   ///       12
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  "1.20");   ///    "1.3"
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",   1000);   ///     2000
user_pref("general.smoothScroll.other.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.other.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pages.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.pages.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pixels.durationMaxMS",        100);            ///      150
user_pref("general.smoothScroll.pixels.durationMinMS",          0);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMaxMS",    100);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMinMS",      0);            ///      150
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");            ///    "0.4"
user_pref("layers.async-pan-zoom.enabled",                   true);            ///     true
user_pref("layout.css.scroll-behavior.spring-constant",   "250.0");            ///   "250.0"
user_pref("mousewheel.acceleration.factor",                     3);            ///       10
user_pref("mousewheel.acceleration.start",                     -1);            ///       -1
user_pref("mousewheel.default.delta_multiplier_x",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_y",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_z",            100);            ///      100
user_pref("mousewheel.min_line_scroll_amount",                  0);            ///        5
user_pref("mousewheel.system_scroll_override.enabled",       true);            ///     true <- 2. If scroll too fast, set to false
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); ///     true
user_pref("mousewheel.transaction.timeout",                  1500);            ///     1500
user_pref("toolkit.scrollbox.horizontalScrollDistance",         4);            ///        5
user_pref("toolkit.scrollbox.verticalScrollDistance",           3);            ///        3
