import { storiesOf } from '@storybook/vue';

storiesOf('Icons', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    template: `<div>
      <i class="a-icon a-icon-alert-octagon"></i>
      <i class="a-icon a-icon-alert-circle"></i>
      <i class="a-icon a-icon-activity"></i>
      <i class="a-icon a-icon-alert-triangle"></i>
      <i class="a-icon a-icon-align-center"></i>
      <i class="a-icon a-icon-airplay"></i>
      <i class="a-icon a-icon-align-justify"></i>
      <i class="a-icon a-icon-align-left"></i>
      <i class="a-icon a-icon-align-right"></i>
      <i class="a-icon a-icon-arrow-down-left"></i>
      <i class="a-icon a-icon-arrow-down-right"></i>
      <i class="a-icon a-icon-anchor"></i>
      <i class="a-icon a-icon-aperture"></i>
      <i class="a-icon a-icon-arrow-left"></i>
      <i class="a-icon a-icon-arrow-right"></i>
      <i class="a-icon a-icon-arrow-down"></i>
      <i class="a-icon a-icon-arrow-up-left"></i>
      <i class="a-icon a-icon-arrow-up-right"></i>
      <i class="a-icon a-icon-arrow-up"></i>
      <i class="a-icon a-icon-award"></i>
      <i class="a-icon a-icon-bar-chart"></i>
      <i class="a-icon a-icon-at-sign"></i>
      <i class="a-icon a-icon-bar-chart-"></i>
      <i class="a-icon a-icon-battery-charging"></i>
      <i class="a-icon a-icon-bell-off"></i>
      <i class="a-icon a-icon-battery"></i>
      <i class="a-icon a-icon-bluetooth"></i>
      <i class="a-icon a-icon-bell"></i>
      <i class="a-icon a-icon-book"></i>
      <i class="a-icon a-icon-briefcase"></i>
      <i class="a-icon a-icon-camera-off"></i>
      <i class="a-icon a-icon-calendar"></i>
      <i class="a-icon a-icon-bookmark"></i>
      <i class="a-icon a-icon-box"></i>
      <i class="a-icon a-icon-camera"></i>
      <i class="a-icon a-icon-check-circle"></i>
      <i class="a-icon a-icon-check"></i>
      <i class="a-icon a-icon-check-square"></i>
      <i class="a-icon a-icon-cast"></i>
      <i class="a-icon a-icon-chevron-down"></i>
      <i class="a-icon a-icon-chevron-left"></i>
      <i class="a-icon a-icon-chevron-right"></i>
      <i class="a-icon a-icon-chevron-up"></i>
      <i class="a-icon a-icon-chevrons-down"></i>
      <i class="a-icon a-icon-chevrons-right"></i>
      <i class="a-icon a-icon-chevrons-up"></i>
      <i class="a-icon a-icon-chevrons-left"></i>
      <i class="a-icon a-icon-circle"></i>
      <i class="a-icon a-icon-clipboard"></i>
      <i class="a-icon a-icon-chrome"></i>
      <i class="a-icon a-icon-clock"></i>
      <i class="a-icon a-icon-cloud-lightning"></i>
      <i class="a-icon a-icon-cloud-drizzle"></i>
      <i class="a-icon a-icon-cloud-rain"></i>
      <i class="a-icon a-icon-cloud-off"></i>
      <i class="a-icon a-icon-codepen"></i>
      <i class="a-icon a-icon-cloud-snow"></i>
      <i class="a-icon a-icon-compass"></i>
      <i class="a-icon a-icon-copy"></i>
      <i class="a-icon a-icon-corner-down-right"></i>
      <i class="a-icon a-icon-corner-down-left"></i>
      <i class="a-icon a-icon-corner-left-down"></i>
      <i class="a-icon a-icon-corner-left-up"></i>
      <i class="a-icon a-icon-corner-up-left"></i>
      <i class="a-icon a-icon-corner-up-right"></i>
      <i class="a-icon a-icon-corner-right-down"></i>
      <i class="a-icon a-icon-corner-right-up"></i>
      <i class="a-icon a-icon-cpu"></i>
      <i class="a-icon a-icon-credit-card"></i>
      <i class="a-icon a-icon-crosshair"></i>
      <i class="a-icon a-icon-disc"></i>
      <i class="a-icon a-icon-delete"></i>
      <i class="a-icon a-icon-download-cloud"></i>
      <i class="a-icon a-icon-download"></i>
      <i class="a-icon a-icon-droplet"></i>
      <i class="a-icon a-icon-edit-"></i>
      <i class="a-icon a-icon-edit"></i>
      <i class="a-icon a-icon-edit-1"></i>
      <i class="a-icon a-icon-external-link"></i>
      <i class="a-icon a-icon-eye"></i>
      <i class="a-icon a-icon-feather"></i>
      <i class="a-icon a-icon-facebook"></i>
      <i class="a-icon a-icon-file-minus"></i>
      <i class="a-icon a-icon-eye-off"></i>
      <i class="a-icon a-icon-fast-forward"></i>
      <i class="a-icon a-icon-file-text"></i>
      <i class="a-icon a-icon-film"></i>
      <i class="a-icon a-icon-file"></i>
      <i class="a-icon a-icon-file-plus"></i>
      <i class="a-icon a-icon-folder"></i>
      <i class="a-icon a-icon-filter"></i>
      <i class="a-icon a-icon-flag"></i>
      <i class="a-icon a-icon-globe"></i>
      <i class="a-icon a-icon-grid"></i>
      <i class="a-icon a-icon-heart"></i>
      <i class="a-icon a-icon-home"></i>
      <i class="a-icon a-icon-github"></i>
      <i class="a-icon a-icon-image"></i>
      <i class="a-icon a-icon-inbox"></i>
      <i class="a-icon a-icon-layers"></i>
      <i class="a-icon a-icon-info"></i>
      <i class="a-icon a-icon-instagram"></i>
      <i class="a-icon a-icon-layout"></i>
      <i class="a-icon a-icon-link-"></i>
      <i class="a-icon a-icon-life-buoy"></i>
      <i class="a-icon a-icon-link"></i>
      <i class="a-icon a-icon-log-in"></i>
      <i class="a-icon a-icon-list"></i>
      <i class="a-icon a-icon-lock"></i>
      <i class="a-icon a-icon-log-out"></i>
      <i class="a-icon a-icon-loader"></i>
      <i class="a-icon a-icon-mail"></i>
      <i class="a-icon a-icon-maximize-"></i>
      <i class="a-icon a-icon-map"></i>
      <i class="a-icon a-icon-maximize"></i>
      <i class="a-icon a-icon-map-pin"></i>
      <i class="a-icon a-icon-menu"></i>
      <i class="a-icon a-icon-message-circle"></i>
      <i class="a-icon a-icon-message-square"></i>
      <i class="a-icon a-icon-minimize-"></i>
      <i class="a-icon a-icon-mic-off"></i>
      <i class="a-icon a-icon-minus-circle"></i>
      <i class="a-icon a-icon-mic"></i>
      <i class="a-icon a-icon-minus-square"></i>
      <i class="a-icon a-icon-minus"></i>
      <i class="a-icon a-icon-moon"></i>
      <i class="a-icon a-icon-monitor"></i>
      <i class="a-icon a-icon-more-vertical"></i>
      <i class="a-icon a-icon-more-horizontal"></i>
      <i class="a-icon a-icon-move"></i>
      <i class="a-icon a-icon-music"></i>
      <i class="a-icon a-icon-navigation-"></i>
      <i class="a-icon a-icon-navigation"></i>
      <i class="a-icon a-icon-octagon"></i>
      <i class="a-icon a-icon-package"></i>
      <i class="a-icon a-icon-pause-circle"></i>
      <i class="a-icon a-icon-pause"></i>
      <i class="a-icon a-icon-percent"></i>
      <i class="a-icon a-icon-phone-call"></i>
      <i class="a-icon a-icon-phone-forwarded"></i>
      <i class="a-icon a-icon-phone-missed"></i>
      <i class="a-icon a-icon-phone-off"></i>
      <i class="a-icon a-icon-phone-incoming"></i>
      <i class="a-icon a-icon-phone"></i>
      <i class="a-icon a-icon-phone-outgoing"></i>
      <i class="a-icon a-icon-pie-chart"></i>
      <i class="a-icon a-icon-play-circle"></i>
      <i class="a-icon a-icon-play"></i>
      <i class="a-icon a-icon-plus-square"></i>
      <i class="a-icon a-icon-plus-circle"></i>
      <i class="a-icon a-icon-plus"></i>
      <i class="a-icon a-icon-pocket"></i>
      <i class="a-icon a-icon-printer"></i>
      <i class="a-icon a-icon-power"></i>
      <i class="a-icon a-icon-radio"></i>
      <i class="a-icon a-icon-repeat"></i>
      <i class="a-icon a-icon-refresh-ccw"></i>
      <i class="a-icon a-icon-rewind"></i>
      <i class="a-icon a-icon-rotate-ccw"></i>
      <i class="a-icon a-icon-refresh-cw"></i>
      <i class="a-icon a-icon-rotate-cw"></i>
      <i class="a-icon a-icon-save"></i>
      <i class="a-icon a-icon-search"></i>
      <i class="a-icon a-icon-server"></i>
      <i class="a-icon a-icon-scissors"></i>
      <i class="a-icon a-icon-share-"></i>
      <i class="a-icon a-icon-share"></i>
      <i class="a-icon a-icon-shield"></i>
      <i class="a-icon a-icon-settings"></i>
      <i class="a-icon a-icon-skip-back"></i>
      <i class="a-icon a-icon-shuffle"></i>
      <i class="a-icon a-icon-sidebar"></i>
      <i class="a-icon a-icon-skip-forward"></i>
      <i class="a-icon a-icon-slack"></i>
      <i class="a-icon a-icon-slash"></i>
      <i class="a-icon a-icon-smartphone"></i>
      <i class="a-icon a-icon-square"></i>
      <i class="a-icon a-icon-speaker"></i>
      <i class="a-icon a-icon-star"></i>
      <i class="a-icon a-icon-stop-circle"></i>
      <i class="a-icon a-icon-sun"></i>
      <i class="a-icon a-icon-sunrise"></i>
      <i class="a-icon a-icon-tablet"></i>
      <i class="a-icon a-icon-tag"></i>
      <i class="a-icon a-icon-sunset"></i>
      <i class="a-icon a-icon-target"></i>
      <i class="a-icon a-icon-thermometer"></i>
      <i class="a-icon a-icon-thumbs-up"></i>
      <i class="a-icon a-icon-thumbs-down"></i>
      <i class="a-icon a-icon-toggle-left"></i>
      <i class="a-icon a-icon-toggle-right"></i>
      <i class="a-icon a-icon-trash-"></i>
      <i class="a-icon a-icon-trash"></i>
      <i class="a-icon a-icon-trending-up"></i>
      <i class="a-icon a-icon-trending-down"></i>
      <i class="a-icon a-icon-triangle"></i>
      <i class="a-icon a-icon-type"></i>
      <i class="a-icon a-icon-twitter"></i>
      <i class="a-icon a-icon-upload"></i>
      <i class="a-icon a-icon-umbrella"></i>
      <i class="a-icon a-icon-upload-cloud"></i>
      <i class="a-icon a-icon-unlock"></i>
      <i class="a-icon a-icon-user-check"></i>
      <i class="a-icon a-icon-user-minus"></i>
      <i class="a-icon a-icon-user-plus"></i>
      <i class="a-icon a-icon-user-x"></i>
      <i class="a-icon a-icon-user"></i>
      <i class="a-icon a-icon-users"></i>
      <i class="a-icon a-icon-video-off"></i>
      <i class="a-icon a-icon-video"></i>
      <i class="a-icon a-icon-voicemail"></i>
      <i class="a-icon a-icon-volume-x"></i>
      <i class="a-icon a-icon-volume-"></i>
      <i class="a-icon a-icon-volume-1"></i>
      <i class="a-icon a-icon-volume"></i>
      <i class="a-icon a-icon-watch"></i>
      <i class="a-icon a-icon-wifi"></i>
      <i class="a-icon a-icon-x-square"></i>
      <i class="a-icon a-icon-wind"></i>
      <i class="a-icon a-icon-x"></i>
      <i class="a-icon a-icon-x-circle"></i>
      <i class="a-icon a-icon-zap"></i>
      <i class="a-icon a-icon-zoom-in"></i>
      <i class="a-icon a-icon-zoom-out"></i>
      <i class="a-icon a-icon-command"></i>
      <i class="a-icon a-icon-cloud"></i>
      <i class="a-icon a-icon-hash"></i>
      <i class="a-icon a-icon-headphones"></i>
    </div>
    `,
  }));