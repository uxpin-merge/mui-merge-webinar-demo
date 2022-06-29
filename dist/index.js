function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var Button$1 = _interopDefault(require('@mui/material/Button'));
var IconM = _interopDefault(require('@mui/material/Icon'));
var ButtonGroupM = _interopDefault(require('@mui/material/ButtonGroup'));
var CheckboxM = _interopDefault(require('@mui/material/Checkbox'));
var FormControlLabelM = _interopDefault(require('@mui/material/FormControlLabel'));
var styles = require('@mui/styles');
var uuid = require('uuid');
var Collapse$1 = _interopDefault(require('@mui/material/Collapse'));
var IconButtonM = _interopDefault(require('@mui/material/IconButton'));
var FabM = _interopDefault(require('@mui/material/Fab'));
var LoadingButtonM = _interopDefault(require('@mui/lab/LoadingButton'));
var RadioM = _interopDefault(require('@mui/material/Radio'));
var RadioGroupM = _interopDefault(require('@mui/material/RadioGroup'));
var FormControlM = _interopDefault(require('@mui/material/FormControl'));
var FormLabelM = _interopDefault(require('@mui/material/FormLabel'));
var RatingM = _interopDefault(require('@mui/material/Rating'));
var SelectM = _interopDefault(require('@mui/material/Select'));
var InputLabel = _interopDefault(require('@mui/material/InputLabel'));
var SliderM = _interopDefault(require('@mui/material/Slider'));
var SwitchM = _interopDefault(require('@mui/material/Switch'));
var TextFieldM = _interopDefault(require('@mui/material/TextField'));
var ToggleButtonM = _interopDefault(require('@mui/material/ToggleButton'));
var ToggleButtonGroupM = _interopDefault(require('@mui/material/ToggleButtonGroup'));
var AvatarM = _interopDefault(require('@mui/material/Avatar'));
var BadgeM = _interopDefault(require('@mui/material/Badge'));
var styles$1 = require('@mui/material/styles');
var DividerM = _interopDefault(require('@mui/material/Divider'));
var ListM = _interopDefault(require('@mui/material/List'));
var ListItemM = require('@mui/material/ListItem');
var ListItemM__default = _interopDefault(ListItemM);
var ListItemIconM = _interopDefault(require('@mui/material/ListItemIcon'));
var ListItemTextM = _interopDefault(require('@mui/material/ListItemText'));
var ListItemSecondaryActionM = _interopDefault(require('@mui/material/ListItemSecondaryAction'));
var ListItemAvatarM = _interopDefault(require('@mui/material/ListItemAvatar'));
var ListItemButtonM = _interopDefault(require('@mui/material/ListItemButton'));
var ListSubheaderM = _interopDefault(require('@mui/material/ListSubheader'));
var TooltipM = _interopDefault(require('@mui/material/Tooltip'));
var TypographyM = _interopDefault(require('@mui/material/Typography'));
require('react-html-parser');
var BottomNavigationM = _interopDefault(require('@mui/material/BottomNavigation'));
var BottomNavigationActionM = _interopDefault(require('@mui/material/BottomNavigationAction'));
var BreadcrumbsM = _interopDefault(require('@mui/material/Breadcrumbs'));
var LinkM = _interopDefault(require('@mui/material/Link'));
var MenuM = _interopDefault(require('@mui/material/Menu'));
var MenuItem$1 = _interopDefault(require('@mui/material/MenuItem'));
var PaginationM = _interopDefault(require('@mui/material/Pagination'));
var TabM = _interopDefault(require('@mui/material/Tab'));
var TabsM = _interopDefault(require('@mui/material/Tabs'));
var ToolbarM = _interopDefault(require('@mui/material/Toolbar'));
var AlertM = _interopDefault(require('@mui/material/Alert'));
var AlertTitleM = _interopDefault(require('@mui/material/AlertTitle'));
var CircularProgressM = _interopDefault(require('@mui/material/CircularProgress'));
var DialogActionsM = _interopDefault(require('@mui/material/DialogActions'));
var DialogContentTextM = _interopDefault(require('@mui/material/DialogContentText'));
var DialogTitleM = _interopDefault(require('@mui/material/DialogTitle'));
var DialogContentM = _interopDefault(require('@mui/material/DialogContent'));
var LinearProgressM = _interopDefault(require('@mui/material/LinearProgress'));
var SnackbarM = _interopDefault(require('@mui/material/Snackbar'));
var SkeletonM = _interopDefault(require('@mui/material/Skeleton'));
var TableM = _interopDefault(require('@mui/material/Table'));
var TableCellM = _interopDefault(require('@mui/material/TableCell'));
var TableBodyM = _interopDefault(require('@mui/material/TableBody'));
var TableHeadM = _interopDefault(require('@mui/material/TableHead'));
var TableRowM = _interopDefault(require('@mui/material/TableRow'));
var FormGroupM = _interopDefault(require('@mui/material/FormGroup'));
var FormHelperTextM = _interopDefault(require('@mui/material/FormHelperText'));
var BoxM = _interopDefault(require('@mui/material/Box'));
var GridM = _interopDefault(require('@mui/material/Grid'));
var StackM = _interopDefault(require('@mui/material/Stack'));
var AccordionM = _interopDefault(require('@mui/material/Accordion'));
var AccordionDetailsM = _interopDefault(require('@mui/material/AccordionDetails'));
var AccordionSummaryM = _interopDefault(require('@mui/material/AccordionSummary'));
var AppBarM = _interopDefault(require('@mui/material/AppBar'));
var CardM = _interopDefault(require('@mui/material/Card'));
var CardActionsM = _interopDefault(require('@mui/material/CardActions'));
var CardActionAreaM = _interopDefault(require('@mui/material/CardActionArea'));
var CardContentM = _interopDefault(require('@mui/material/CardContent'));
var CardHeaderM = _interopDefault(require('@mui/material/CardHeader'));
var CardMediaM = _interopDefault(require('@mui/material/CardMedia'));
var PaperM = _interopDefault(require('@mui/material/Paper'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var iconVariants = ['10k', '10mp', '11mp', '123', '12mp', '13mp', '14mp', '15mp', '16mp', '17mp', '18_up_rating', '18mp', '19mp', '1k', '1k_plus', '1x_mobiledata', '20mp', '21mp', '22mp', '23mp', '24mp', '2k', '2k_plus', '2mp', '30fps', '30fps_select', '360', '3d_rotation', '3g_mobiledata', '3k', '3k_plus', '3mp', '3p', '4g_mobiledata', '4g_plus_mobiledata', '4k', '4k_plus', '4mp', '5g', '5k', '5k_plus', '5mp', '60fps', '60fps_select', '6_ft_apart', '6k', '6k_plus', '6mp', '7k', '7k_plus', '7mp', '8k', '8k_plus', '8mp', '9k', '9k_plus', '9mp', 'abc', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'access_time_filled', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'account_tree', 'ad_units', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_business', 'add_call', 'add_card', 'add_chart', 'add_circle', 'add_circle_outline', 'add_comment', 'add_home', 'add_home_work', 'add_ic_call', 'add_link', 'add_location', 'add_location_alt', 'add_moderator', 'add_photo_alternate', 'add_reaction', 'add_road', 'add_shopping_cart', 'add_task', 'add_to_drive', 'add_to_home_screen', 'add_to_photos', 'add_to_queue', 'addchart', 'adf_scanner', 'adjust', 'admin_panel_settings', 'adobe', 'ads_click', 'agriculture', 'air', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airline_stops', 'airlines', 'airplane_ticket', 'airplanemode_active', 'airplanemode_inactive', 'airplanemode_off', 'airplanemode_on', 'airplay', 'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'align_horizontal_center', 'align_horizontal_left', 'align_horizontal_right', 'align_vertical_bottom', 'align_vertical_center', 'align_vertical_top', 'all_inbox', 'all_inclusive', 'all_out', 'alt_route', 'alternate_email', 'amp_stories', 'analytics', 'anchor', 'android', 'animation', 'announcement', 'aod', 'apartment', 'api', 'app_blocking', 'app_registration', 'app_settings_alt', 'app_shortcut', 'apple', 'approval', 'apps', 'apps_outage', 'architecture', 'archive', 'area_chart', 'arrow_back', 'arrow_back_ios', 'arrow_back_ios_new', 'arrow_circle_down', 'arrow_circle_left', 'arrow_circle_right', 'arrow_circle_up', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_outward', 'arrow_right', 'arrow_right_alt', 'arrow_upward', 'art_track', 'article', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assist_walker', 'assistant', 'assistant_direction', 'assistant_navigation', 'assistant_photo', 'assured_workload', 'atm', 'attach_email', 'attach_file', 'attach_money', 'attachment', 'attractions', 'attribution', 'audio_file', 'audiotrack', 'auto_awesome', 'auto_awesome_mosaic', 'auto_awesome_motion', 'auto_delete', 'auto_fix_high', 'auto_fix_normal', 'auto_fix_off', 'auto_graph', 'auto_mode', 'auto_stories', 'autofps_select', 'autorenew', 'av_timer', 'baby_changing_station', 'back_hand', 'backpack', 'backspace', 'backup', 'backup_table', 'badge', 'bakery_dining', 'balance', 'balcony', 'ballot', 'bar_chart', 'batch_prediction', 'bathroom', 'bathtub', 'battery_0_bar', 'battery_1_bar', 'battery_2_bar', 'battery_3_bar', 'battery_4_bar', 'battery_5_bar', 'battery_6_bar', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_saver', 'battery_std', 'battery_unknown', 'beach_access', 'bed', 'bedroom_baby', 'bedroom_child', 'bedroom_parent', 'bedtime', 'bedtime_off', 'beenhere', 'bento', 'bike_scooter', 'biotech', 'blender', 'blind', 'blinds', 'blinds_closed', 'block', 'block_flipped', 'bloodtype', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_drive', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'bolt', 'book', 'book_online', 'bookmark', 'bookmark_add', 'bookmark_added', 'bookmark_border', 'bookmark_outline', 'bookmark_remove', 'bookmarks', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'boy', 'branding_watermark', 'breakfast_dining', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broadcast_on_home', 'broadcast_on_personal', 'broken_image', 'browse_gallery', 'browser_not_supported', 'browser_updated', 'brunch_dining', 'brush', 'bubble_chart', 'bug_report', 'build', 'build_circle', 'bungalow', 'burst_mode', 'bus_alert', 'business', 'business_center', 'cabin', 'cable', 'cached', 'cake', 'calculate', 'calendar_month', 'calendar_today', 'calendar_view_day', 'calendar_view_month', 'calendar_view_week', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_indoor', 'camera_outdoor', 'camera_rear', 'camera_roll', 'cameraswitch', 'campaign', 'cancel', 'cancel_presentation', 'cancel_schedule_send', 'candlestick_chart', 'car_crash', 'car_rental', 'car_repair', 'card_giftcard', 'card_membership', 'card_travel', 'carpenter', 'cases', 'casino', 'cast', 'cast_connected', 'cast_for_education', 'castle', 'catching_pokemon', 'category', 'celebration', 'cell_tower', 'cell_wifi', 'center_focus_strong', 'center_focus_weak', 'chair', 'chair_alt', 'chalet', 'change_circle', 'change_history', 'charging_station', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'check_circle_outline', 'checklist', 'checklist_rtl', 'checkroom', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly', 'chrome_reader_mode', 'church', 'circle', 'circle_notifications', 'class', 'clean_hands', 'cleaning_services', 'clear', 'clear_all', 'close', 'close_fullscreen', 'closed_caption', 'closed_caption_disabled', 'closed_caption_off', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_sync', 'cloud_upload', 'cloudy_snowing', 'co2', 'co_present', 'code', 'code_off', 'coffee', 'coffee_maker', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'comment_bank', 'comments_disabled', 'commit', 'commute', 'compare', 'compare_arrows', 'compass_calibration', 'compost', 'compress', 'computer', 'confirmation_num', 'confirmation_number', 'connect_without_contact', 'connected_tv', 'connecting_airports', 'construction', 'contact_emergency', 'contact_mail', 'contact_page', 'contact_phone', 'contact_support', 'contactless', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'content_paste_go', 'content_paste_off', 'content_paste_search', 'contrast', 'control_camera', 'control_point', 'control_point_duplicate', 'cookie', 'copy_all', 'copyright', 'coronavirus', 'corporate_fare', 'cottage', 'countertops', 'create', 'create_new_folder', 'credit_card', 'credit_card_off', 'credit_score', 'crib', 'crisis_alert', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'cruelty_free', 'css', 'currency_bitcoin', 'currency_exchange', 'currency_franc', 'currency_lira', 'currency_pound', 'currency_ruble', 'currency_rupee', 'currency_yen', 'currency_yuan', 'curtains', 'curtains_closed', 'cyclone', 'dangerous', 'dark_mode', 'dashboard', 'dashboard_customize', 'data_array', 'data_exploration', 'data_object', 'data_saver_off', 'data_saver_on', 'data_thresholding', 'data_usage', 'dataset', 'dataset_linked', 'date_range', 'deblur', 'deck', 'dehaze', 'delete', 'delete_forever', 'delete_outline', 'delete_sweep', 'delivery_dining', 'density_large', 'density_medium', 'density_small', 'departure_board', 'description', 'deselect', 'design_services', 'desk', 'desktop_access_disabled', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_board_off', 'developer_mode', 'device_hub', 'device_thermostat', 'device_unknown', 'devices', 'devices_fold', 'devices_other', 'dialer_sip', 'dialpad', 'diamond', 'difference', 'dining', 'dinner_dining', 'directions', 'directions_bike', 'directions_boat', 'directions_boat_filled', 'directions_bus', 'directions_bus_filled', 'directions_car', 'directions_car_filled', 'directions_ferry', 'directions_off', 'directions_railway', 'directions_railway_filled', 'directions_run', 'directions_subway', 'directions_subway_filled', 'directions_train', 'directions_transit', 'directions_transit_filled', 'directions_walk', 'dirty_lens', 'disabled_by_default', 'disabled_visible', 'disc_full', 'discord', 'discount', 'display_settings', 'diversity_1', 'diversity_2', 'diversity_3', 'dnd_forwardslash', 'dns', 'do_disturb', 'do_disturb_alt', 'do_disturb_off', 'do_disturb_on', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'do_not_disturb_on_total_silence', 'do_not_step', 'do_not_touch', 'dock', 'document_scanner', 'domain', 'domain_add', 'domain_disabled', 'domain_verification', 'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'door_back', 'door_front', 'door_sliding', 'doorbell', 'double_arrow', 'downhill_skiing', 'download', 'download_done', 'download_for_offline', 'downloading', 'drafts', 'drag_handle', 'drag_indicator', 'draw', 'drive_eta', 'drive_file_move', 'drive_file_move_outline', 'drive_file_move_rtl', 'drive_file_rename_outline', 'drive_folder_upload', 'dry', 'dry_cleaning', 'duo', 'dvr', 'dynamic_feed', 'dynamic_form', 'e_mobiledata', 'earbuds', 'earbuds_battery', 'east', 'eco', 'edgesensor_high', 'edgesensor_low', 'edit', 'edit_attributes', 'edit_calendar', 'edit_location', 'edit_location_alt', 'edit_note', 'edit_notifications', 'edit_off', 'edit_road', 'egg', 'egg_alt', 'eject', 'elderly', 'elderly_woman', 'electric_bike', 'electric_bolt', 'electric_car', 'electric_meter', 'electric_moped', 'electric_rickshaw', 'electric_scooter', 'electrical_services', 'elevator', 'email', 'emergency', 'emergency_recording', 'emergency_share', 'emoji_emotions', 'emoji_events', 'emoji_flags', 'emoji_food_beverage', 'emoji_nature', 'emoji_objects', 'emoji_people', 'emoji_symbols', 'emoji_transportation', 'energy_savings_leaf', 'engineering', 'enhance_photo_translate', 'enhanced_encryption', 'equalizer', 'error', 'error_outline', 'escalator', 'escalator_warning', 'euro', 'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_repeat', 'event_seat', 'exit_to_app', 'expand', 'expand_circle_down', 'expand_less', 'expand_more', 'explicit', 'explore', 'explore_off', 'exposure', 'exposure_minus_1', 'exposure_minus_2', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'extension_off', 'face', 'face_2', 'face_3', 'face_4', 'face_5', 'face_6', 'face_retouching_natural', 'face_retouching_off', 'facebook', 'fact_check', 'factory', 'family_restroom', 'fast_forward', 'fast_rewind', 'fastfood', 'favorite', 'favorite_border', 'favorite_outline', 'fax', 'featured_play_list', 'featured_video', 'feed', 'feedback', 'female', 'fence', 'festival', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'file_copy', 'file_download', 'file_download_done', 'file_download_off', 'file_open', 'file_present', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_alt', 'filter_alt_off', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_list_alt', 'filter_list_off', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'fire_extinguisher', 'fire_hydrant', 'fire_hydrant_alt', 'fire_truck', 'fireplace', 'first_page', 'fit_screen', 'fitbit', 'fitness_center', 'flag', 'flag_circle', 'flaky', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flashlight_off', 'flashlight_on', 'flatware', 'flight', 'flight_class', 'flight_land', 'flight_takeoff', 'flip', 'flip_camera_android', 'flip_camera_ios', 'flip_to_back', 'flip_to_front', 'flood', 'flourescent', 'flutter_dash', 'fmd_bad', 'fmd_good', 'foggy', 'folder', 'folder_copy', 'folder_delete', 'folder_off', 'folder_open', 'folder_shared', 'folder_special', 'folder_zip', 'follow_the_signs', 'font_download', 'font_download_off', 'food_bank', 'forest', 'fork_left', 'fork_right', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_overline', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underline', 'format_underlined', 'fort', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'forward_to_inbox', 'foundation', 'free_breakfast', 'free_cancellation', 'front_hand', 'fullscreen', 'fullscreen_exit', 'functions', 'g_mobiledata', 'g_translate', 'gamepad', 'games', 'garage', 'gas_meter', 'gavel', 'generating_tokens', 'gesture', 'get_app', 'gif', 'gif_box', 'girl', 'gite', 'goat 1', 'golf_course', 'gpp_bad', 'gpp_good', 'gpp_maybe', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grading', 'grain', 'graphic_eq', 'grass', 'grid_3x3', 'grid_4x4', 'grid_goldenratio', 'grid_off', 'grid_on', 'grid_view', 'group', 'group_add', 'group_off', 'group_remove', 'group_work', 'groups', 'groups_2', 'groups_3', 'h_mobiledata', 'h_plus_mobiledata', 'hail', 'handshake', 'handyman', 'hardware', 'hd', 'hdr_auto', 'hdr_auto_select', 'hdr_enhanced_select', 'hdr_off', 'hdr_off_select', 'hdr_on', 'hdr_on_select', 'hdr_plus', 'hdr_strong', 'hdr_weak', 'headphones', 'headphones_battery', 'headset', 'headset_mic', 'headset_off', 'healing', 'health_and_safety', 'hearing', 'hearing_disabled', 'heart_broken', 'heat_pump', 'height', 'help', 'help_center', 'help_outline', 'hevc', 'hexagon', 'hide_image', 'hide_source', 'high_quality', 'highlight', 'highlight_alt', 'highlight_off', 'highlight_remove', 'hiking', 'history', 'history_edu', 'history_toggle_off', 'hive', 'hls', 'hls_off', 'holiday_village', 'home', 'home_filled', 'home_max', 'home_mini', 'home_repair_service', 'home_work', 'horizontal_distribute', 'horizontal_rule', 'horizontal_split', 'hot_tub', 'hotel', 'hotel_class', 'hourglass_bottom', 'hourglass_disabled', 'hourglass_empty', 'hourglass_full', 'hourglass_top', 'house', 'house_siding', 'houseboat', 'how_to_reg', 'how_to_vote', 'html', 'http', 'https', 'hub', 'hvac', 'ice_skating', 'icecream', 'image', 'image_aspect_ratio', 'image_not_supported', 'image_search', 'imagesearch_roller', 'import_contacts', 'import_export', 'important_devices', 'inbox', 'incomplete_circle', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_page_break', 'insert_photo', 'insights', 'install_desktop', 'install_mobile', 'integration_instructions', 'interests', 'interpreter_mode', 'inventory', 'inventory_2', 'invert_colors', 'invert_colors_off', 'invert_colors_on', 'ios_share', 'iron', 'iso', 'javascript', 'join_full', 'join_inner', 'join_left', 'join_right', 'kayaking', 'kebab_dining', 'key', 'key_off', 'keyboard', 'keyboard_alt', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_command', 'keyboard_command_key', 'keyboard_control', 'keyboard_control_key', 'keyboard_double_arrow_down', 'keyboard_double_arrow_left', 'keyboard_double_arrow_right', 'keyboard_double_arrow_up', 'keyboard_hide', 'keyboard_option', 'keyboard_option_key', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'king_bed', 'kitchen', 'kitesurfing', 'label', 'label_important', 'label_important_outline', 'label_off', 'label_outline', 'lan', 'landscape', 'landslide', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers', 'layers_clear', 'leaderboard', 'leak_add', 'leak_remove', 'leave_bags_at_home', 'legend_toggle', 'lens', 'lens_blur', 'library_add', 'library_add_check', 'library_books', 'library_music', 'light', 'light_mode', 'lightbulb', 'lightbulb_circle', 'lightbulb_outline', 'line_axis', 'line_style', 'line_weight', 'linear_scale', 'link', 'link_off', 'linked_camera', 'liquor', 'list', 'list_alt', 'live_help', 'live_tv', 'living', 'local_activity', 'local_airport', 'local_atm', 'local_attraction', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_fire_department', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_police', 'local_post_office', 'local_print_shop', 'local_printshop', 'local_restaurant', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_history', 'location_off', 'location_on', 'location_pin', 'location_searching', 'lock', 'lock_clock', 'lock_open', 'lock_outline', 'lock_person', 'lock_reset', 'login', 'logo_dev', 'logout', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'lte_mobiledata', 'lte_plus_mobiledata', 'luggage', 'lunch_dining', 'lyrics', 'macro_off', 'mail', 'mail_lock', 'mail_outline', 'male', 'man', 'man_2', 'man_3', 'man_4', 'manage_accounts', 'manage_history', 'manage_search', 'map', 'maps_home_work', 'maps_ugc', 'margin', 'mark_as_unread', 'mark_chat_read', 'mark_chat_unread', 'mark_email_read', 'mark_email_unread', 'mark_unread_chat_alt', 'markunread', 'markunread_mailbox', 'masks', 'maximize', 'media_bluetooth_off', 'media_bluetooth_on', 'mediation', 'medical_information', 'medical_services', 'medication', 'medication_liquid', 'meeting_room', 'memory', 'menu', 'menu_book', 'menu_open', 'merge', 'merge_type', 'message', 'messenger', 'messenger_outline', 'mic', 'mic_external_off', 'mic_external_on', 'mic_none', 'mic_off', 'microwave', 'military_tech', 'minimize', 'minor_crash', 'miscellaneous_services', 'missed_video_call', 'mms', 'mobile_friendly', 'mobile_off', 'mobile_screen_share', 'mobiledata_off', 'mode', 'mode_comment', 'mode_edit', 'mode_edit_outline', 'mode_fan_off', 'mode_night', 'mode_of_travel', 'mode_standby', 'model_training', 'monetization_on', 'money', 'money_off', 'money_off_csred', 'monitor', 'monitor_heart', 'monitor_weight', 'monochrome_photos', 'mood', 'mood_bad', 'moped', 'more', 'more_horiz', 'more_time', 'more_vert', 'mosque', 'motion_photos_auto', 'motion_photos_off', 'motion_photos_on', 'motion_photos_pause', 'motion_photos_paused', 'motorcycle', 'mouse', 'move_down', 'move_to_inbox', 'move_up', 'movie', 'movie_creation', 'movie_filter', 'moving', 'mp', 'multiline_chart', 'multiple_stop', 'multitrack_audio', 'museum', 'music_note', 'music_off', 'music_video', 'my_library_add', 'my_library_books', 'my_library_music', 'my_location', 'nat', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'near_me_disabled', 'nearby_error', 'nearby_off', 'nest_cam_wired_stand', 'network_cell', 'network_check', 'network_locked', 'network_ping', 'network_wifi', 'network_wifi_1_bar', 'network_wifi_2_bar', 'network_wifi_3_bar', 'new_label', 'new_releases', 'newspaper', 'next_plan', 'next_week', 'nfc', 'night_shelter', 'nightlife', 'nightlight', 'nightlight_round', 'nights_stay', 'no_accounts', 'no_adult_content', 'no_backpack', 'no_cell', 'no_crash', 'no_drinks', 'no_encryption', 'no_encryption_gmailerrorred', 'no_flash', 'no_food', 'no_luggage', 'no_meals', 'no_meals_ouline', 'no_meeting_room', 'no_photography', 'no_sim', 'no_stroller', 'no_transfer', 'noise_aware', 'noise_control_off', 'nordic_walking', 'north', 'north_east', 'north_west', 'not_accessible', 'not_interested', 'not_listed_location', 'not_started', 'note', 'note_add', 'note_alt', 'notes', 'notification_add', 'notification_important', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_on', 'notifications_paused', 'now_wallpaper', 'now_widgets', 'numbers', 'offline_bolt', 'offline_pin', 'offline_share', 'oil_barrel', 'on_device_training', 'ondemand_video', 'online_prediction', 'opacity', 'open_in_browser', 'open_in_full', 'open_in_new', 'open_in_new_off', 'open_with', 'other_houses', 'outbond', 'outbound', 'outbox', 'outdoor_grill', 'outgoing_mail', 'outlet', 'outlined_flag', 'output', 'padding', 'pages', 'pageview', 'paid', 'palette', 'pan_tool', 'pan_tool_alt', 'panorama', 'panorama_fish_eye', 'panorama_fisheye', 'panorama_horizontal', 'panorama_horizontal_select', 'panorama_photosphere', 'panorama_photosphere_select', 'panorama_vertical', 'panorama_vertical_select', 'panorama_wide_angle', 'panorama_wide_angle_select', 'paragliding', 'park', 'party_mode', 'password', 'pattern', 'pause', 'pause_circle', 'pause_circle_filled', 'pause_circle_outline', 'pause_presentation', 'payment', 'payments', 'paypal', 'pedal_bike', 'pending', 'pending_actions', 'pentagon', 'people', 'people_alt', 'people_outline', 'percent', 'perm_camera_mic', 'perm_contact_cal', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_info', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_2', 'person_3', 'person_4', 'person_add', 'person_add_alt', 'person_add_alt_1', 'person_add_disabled', 'person_off', 'person_outline', 'person_pin', 'person_pin_circle', 'person_remove', 'person_remove_alt_1', 'person_search', 'personal_injury', 'personal_video', 'pest_control', 'pest_control_rodent', 'pets', 'phishing', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_callback', 'phone_disabled', 'phone_enabled', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_camera_back', 'photo_camera_front', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'php', 'piano', 'piano_off', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outline', 'pie_chart_outlined', 'pin', 'pin_drop', 'pin_end', 'pin_invoke', 'pinch', 'pivot_table_chart', 'pix', 'place', 'plagiarism', 'play_arrow', 'play_circle', 'play_circle_fill', 'play_circle_filled', 'play_circle_outline', 'play_disabled', 'play_for_work', 'play_lesson', 'playlist_add', 'playlist_add_check', 'playlist_add_check_circle', 'playlist_add_circle', 'playlist_play', 'playlist_remove', 'plumbing', 'plus_one', 'podcasts', 'point_of_sale', 'policy', 'poll', 'polyline', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'post_add', 'power', 'power_input', 'power_off', 'power_settings_new', 'precision_manufacturing', 'pregnant_woman', 'present_to_all', 'preview', 'price_change', 'price_check', 'print', 'print_disabled', 'priority_high', 'privacy_tip', 'private_connectivity', 'production_quantity_limits', 'propane', 'propane_tank', 'psychology', 'psychology_alt', 'public', 'public_off', 'publish', 'published_with_changes', 'punch_clock', 'push_pin', 'qr_code', 'qr_code_2', 'qr_code_scanner', 'query_builder', 'query_stats', 'question_answer', 'question_mark', 'queue', 'queue_music', 'queue_play_next', 'quick_contacts_dialer', 'quick_contacts_mail', 'quickreply', 'quiz', 'quora', 'r_mobiledata', 'radar', 'radio', 'radio_button_checked', 'radio_button_off', 'radio_button_on', 'radio_button_unchecked', 'railway_alert', 'ramen_dining', 'ramp_left', 'ramp_right', 'rate_review', 'raw_off', 'raw_on', 'read_more', 'real_estate_agent', 'receipt', 'receipt_long', 'recent_actors', 'recommend', 'record_voice_over', 'rectangle', 'recycling', 'reddit', 'redeem', 'redo', 'reduce_capacity', 'refresh', 'remember_me', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_done', 'remove_from_queue', 'remove_moderator', 'remove_red_eye', 'remove_road', 'remove_shopping_cart', 'reorder', 'repartition', 'repeat', 'repeat_on', 'repeat_one', 'repeat_one_on', 'replay', 'replay_10', 'replay_30', 'replay_5', 'replay_circle_filled', 'reply', 'reply_all', 'report', 'report_gmailerrorred', 'report_off', 'report_problem', 'request_page', 'request_quote', 'reset_tv', 'restart_alt', 'restaurant', 'restaurant_menu', 'restore', 'restore_from_trash', 'restore_page', 'reviews', 'rice_bowl', 'ring_volume', 'rocket', 'rocket_launch', 'roller_shades', 'roller_shades_closed', 'roller_skating', 'roofing', 'room', 'room_preferences', 'room_service', 'rotate_90_degrees_ccw', 'rotate_90_degrees_cw', 'rotate_left', 'rotate_right', 'roundabout_left', 'roundabout_right', 'rounded_corner', 'route', 'router', 'rowing', 'rss_feed', 'rsvp', 'rtt', 'rule', 'rule_folder', 'run_circle', 'running_with_errors', 'rv_hookup', 'safety_check', 'safety_divider', 'sailing', 'sanitizer', 'satellite', 'satellite_alt', 'save', 'save_alt', 'save_as', 'saved_search', 'savings', 'scale', 'scanner', 'scatter_plot', 'schedule', 'schedule_send', 'schema', 'school', 'science', 'score', 'scoreboard', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_rotation_alt', 'screen_search_desktop', 'screen_share', 'screenshot', 'screenshot_monitor', 'scuba_diving', 'sd', 'sd_card', 'sd_card_alert', 'sd_storage', 'search', 'search_off', 'security', 'security_update', 'security_update_good', 'security_update_warning', 'segment', 'select_all', 'self_improvement', 'sell', 'send', 'send_and_archive', 'send_time_extension', 'send_to_mobile', 'sensor_door', 'sensor_occupied', 'sensor_window', 'sensors', 'sensors_off', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_satisfied_alt', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'set_meal', 'settings', 'settings_accessibility', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_display', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_suggest', 'settings_system_daydream', 'settings_voice', 'severe_cold', 'shape_line', 'share', 'share_arrival_time', 'share_location', 'shield', 'shield_moon', 'shop', 'shop_2', 'shop_two', 'shopify', 'shopping_bag', 'shopping_basket', 'shopping_cart', 'shopping_cart_checkout', 'short_text', 'shortcut', 'show_chart', 'shower', 'shuffle', 'shuffle_on', 'shutter_speed', 'sick', 'sign_language', 'signal_cellular_0_bar', 'signal_cellular_4_bar', 'signal_cellular_alt', 'signal_cellular_alt_1_bar', 'signal_cellular_alt_2_bar', 'signal_cellular_connected_no_internet_0_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_nodata', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_0_bar', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_bad', 'signal_wifi_connected_no_internet_4', 'signal_wifi_off', 'signal_wifi_statusbar_4_bar', 'signal_wifi_statusbar_connected_no_internet_4', 'signal_wifi_statusbar_null', 'signpost', 'sim_card', 'sim_card_alert', 'sim_card_download', 'single_bed', 'sip', 'skateboarding', 'skip_next', 'skip_previous', 'sledding', 'slideshow', 'slow_motion_video', 'smart_button', 'smart_display', 'smart_screen', 'smart_toy', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snapchat', 'snippet_folder', 'snooze', 'snowboarding', 'snowing', 'snowmobile', 'snowshoeing', 'soap', 'social_distance', 'solar_power', 'sort', 'sort_by_alpha', 'sos', 'soup_kitchen', 'source', 'south', 'south_america', 'south_east', 'south_west', 'spa', 'space_bar', 'space_dashboard', 'spatial_audio', 'spatial_audio_off', 'spatial_tracking', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'speed', 'spellcheck', 'splitscreen', 'spoke', 'sports', 'sports_bar', 'sports_baseball', 'sports_basketball', 'sports_cricket', 'sports_esports', 'sports_football', 'sports_golf', 'sports_gymnastics', 'sports_handball', 'sports_hockey', 'sports_kabaddi', 'sports_martial_arts', 'sports_mma', 'sports_motorsports', 'sports_rugby', 'sports_score', 'sports_soccer', 'sports_tennis', 'sports_volleyball', 'square', 'square_foot', 'ssid_chart', 'stacked_bar_chart', 'stacked_line_chart', 'stadium', 'stairs', 'star', 'star_border', 'star_border_purple500', 'star_half', 'star_outline', 'star_purple500', 'star_rate', 'stars', 'start', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'sticky_note_2', 'stop', 'stop_circle', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'storefront', 'storm', 'straight', 'straighten', 'stream', 'streetview', 'strikethrough_s', 'stroller', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscript', 'subscriptions', 'subtitles', 'subtitles_off', 'subway', 'summarize', 'sunny', 'sunny_snowing', 'superscript', 'supervised_user_circle', 'supervisor_account', 'support', 'support_agent', 'surfing', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vert_circle', 'swap_vertical_circle', 'swipe', 'swipe_down', 'swipe_down_alt', 'swipe_left', 'swipe_left_alt', 'swipe_right', 'swipe_right_alt', 'swipe_up', 'swipe_up_alt', 'swipe_vertical', 'switch_access_shortcut', 'switch_access_shortcut_add', 'switch_account', 'switch_camera', 'switch_left', 'switch_right', 'switch_video', 'synagogue', 'sync', 'sync_alt', 'sync_disabled', 'sync_lock', 'sync_problem', 'system_security_update', 'system_security_update_good', 'system_security_update_warning', 'system_update', 'system_update_alt', 'system_update_tv', 'tab', 'tab_unselected', 'table_bar', 'table_chart', 'table_restaurant', 'table_rows', 'table_view', 'tablet', 'tablet_android', 'tablet_mac', 'tag', 'tag_faces', 'takeout_dining', 'tap_and_play', 'tapas', 'task', 'task_alt', 'taxi_alert', 'telegram', 'temple_buddhist', 'temple_hindu', 'terminal', 'terrain', 'text_decrease', 'text_fields', 'text_format', 'text_increase', 'text_rotate_up', 'text_rotate_vertical', 'text_rotation_angledown', 'text_rotation_angleup', 'text_rotation_down', 'text_rotation_none', 'text_snippet', 'textsms', 'texture', 'theater_comedy', 'theaters', 'thermostat', 'thermostat_auto', 'thumb_down', 'thumb_down_alt', 'thumb_down_off_alt', 'thumb_up', 'thumb_up_alt', 'thumb_up_off_alt', 'thumbs_up_down', 'thunderstorm', 'tiktok', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_10_select', 'timer_3', 'timer_3_select', 'timer_off', 'tips_and_updates', 'tire_repair', 'title', 'toc', 'today', 'toggle_off', 'toggle_on', 'token', 'toll', 'tonality', 'topic', 'tornado', 'touch_app', 'tour', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transcribe', 'transfer_within_a_station', 'transform', 'transgender', 'transit_enterexit', 'translate', 'travel_explore', 'trending_down', 'trending_flat', 'trending_neutral', 'trending_up', 'trip_origin', 'troubleshoot', 'try', 'tsunami', 'tty', 'tune', 'tungsten', 'turn_left', 'turn_right', 'turn_sharp_left', 'turn_sharp_right', 'turn_slight_left', 'turn_slight_right', 'turned_in', 'turned_in_not', 'tv', 'tv_off', 'two_wheeler', 'type_specimen', 'u_turn_left', 'u_turn_right', 'umbrella', 'unarchive', 'undo', 'unfold_less', 'unfold_less_double', 'unfold_more', 'unfold_more_double', 'unpublished', 'unsubscribe', 'upcoming', 'update', 'update_disabled', 'upgrade', 'upload', 'upload_file', 'usb', 'usb_off', 'vaccines', 'vape_free', 'vaping_rooms', 'verified', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vertical_distribute', 'vertical_shades', 'vertical_shades_closed', 'vertical_split', 'vibration', 'video_call', 'video_camera_back', 'video_camera_front', 'video_collection', 'video_file', 'video_label', 'video_library', 'video_settings', 'video_stable', 'videocam', 'videocam_off', 'videogame_asset', 'videogame_asset_off', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfortable', 'view_comfy', 'view_comfy_alt', 'view_compact', 'view_compact_alt', 'view_cozy', 'view_day', 'view_headline', 'view_in_ar', 'view_kanban', 'view_list', 'view_module', 'view_quilt', 'view_sidebar', 'view_stream', 'view_timeline', 'view_week', 'vignette', 'villa', 'visibility', 'visibility_off', 'voice_chat', 'voice_over_off', 'voicemail', 'volcano', 'volume_down', 'volume_down_alt', 'volume_mute', 'volume_off', 'volume_up', 'volunteer_activism', 'vpn_key', 'vpn_key_off', 'vpn_lock', 'vrpano', 'wallet', 'wallet_giftcard', 'wallet_membership', 'wallet_travel', 'wallpaper', 'warehouse', 'warning', 'warning_amber', 'wash', 'watch', 'watch_later', 'watch_off', 'water', 'water_damage', 'water_drop', 'waterfall_chart', 'waves', 'waving_hand', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_shade', 'wb_sunny', 'wb_twighlight', 'wb_twilight', 'wc', 'web', 'web_asset', 'web_asset_off', 'web_stories', 'webhook', 'wechat', 'weekend', 'west', 'whatsapp', 'whatshot', 'wheelchair_pickup', 'where_to_vote', 'widgets', 'width_full', 'width_normal', 'width_wide', 'wifi', 'wifi_1_bar', 'wifi_2_bar', 'wifi_calling', 'wifi_calling_3', 'wifi_channel', 'wifi_find', 'wifi_lock', 'wifi_off', 'wifi_password', 'wifi_protected_setup', 'wifi_tethering', 'wifi_tethering_error', 'wifi_tethering_error_rounded', 'wifi_tethering_off', 'wind_power', 'window', 'wine_bar', 'woman', 'woman_2', 'woo_commerce', 'wordpress', 'work', 'work_history', 'work_off', 'work_outline', 'workspace_premium', 'workspaces', 'workspaces_filled', 'workspaces_outline', 'wrap_text', 'wrong_location', 'wysiwyg', 'yard', 'youtube_searched_for', 'zoom_in', 'zoom_in_map', 'zoom_out', 'zoom_out_map'];

var icons = document.createElement('link');
icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
icons.setAttribute('rel', 'stylesheet');
document.head.appendChild(icons);

function Icon(props) {
  return /*#__PURE__*/React__default.createElement(IconM, props, props.children);
}

Icon.propTypes = {
  children: PropTypes__default.oneOf(iconVariants),
  color: PropTypes__default.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
  fontSize: PropTypes__default.oneOf(['large', 'medium', 'small', 'inherit']),
  sx: PropTypes__default.object
};
Icon.defaultProps = {};

var _excluded = ["uxpinRef"];

function Button(props) {
  var uxpinRef = props.uxpinRef,
      other = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React__default.createElement(Button$1, _extends({}, other, {
    ref: uxpinRef,
    startIcon: props.startIcon && /*#__PURE__*/React__default.createElement(Icon, null, props.startIcon),
    endIcon: props.endIcon && /*#__PURE__*/React__default.createElement(Icon, null, props.endIcon)
  }), props.children);
}

Button.propTypes = {
  children: PropTypes__default.node,
  color: PropTypes__default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  disabled: PropTypes__default.bool,
  disableElevation: PropTypes__default.bool,
  fullWidth: PropTypes__default.bool,
  size: PropTypes__default.oneOf(["small", "medium", "large"]),
  variant: PropTypes__default.oneOf(["text", "outlined", "contained"]),
  href: PropTypes__default.string,
  startIcon: PropTypes__default.oneOf(iconVariants),
  endIcon: PropTypes__default.oneOf(iconVariants),
  onClick: PropTypes__default.func,
  sx: PropTypes__default.object
};

function ButtonGroup(props) {
  return /*#__PURE__*/React__default.createElement(ButtonGroupM, props, props.children);
}

ButtonGroup.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
  component: PropTypes__default.elementType,
  disabled: PropTypes__default.bool,
  disableElevation: PropTypes__default.bool,
  disableRipple: PropTypes__default.bool,
  fullWidth: PropTypes__default.bool,
  orientation: PropTypes__default.oneOf(['horizontal', 'vertical']),
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  sx: PropTypes__default.object,
  variant: PropTypes__default.oneOf(['contained', 'outlined', 'text'])
};

function Checkbox(props) {
  return /*#__PURE__*/React__default.createElement(CheckboxM, _extends({}, props, {
    defaultChecked: true
  }));
}

Checkbox.propTypes = {
  checked: PropTypes__default.bool,
  checkedIcon: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  disabled: PropTypes__default.bool,
  onChange: PropTypes__default.func,
  required: PropTypes__default.bool,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  value: PropTypes__default.string,
  sx: PropTypes__default.object
};
Checkbox.defaultProps = {
  checked: false
};

function FormControlLabel(props) {
  return /*#__PURE__*/React__default.createElement(FormControlLabelM, props, props.children);
}

FormControlLabel.propTypes = {
  checked: PropTypes__default.bool,
  classes: PropTypes__default.object,
  control: PropTypes__default.element,
  disabled: PropTypes__default.bool,
  disableTypography: PropTypes__default.bool,
  inputRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.object]),
  label: PropTypes__default.node,
  labelPlacement: PropTypes__default.oneOf(['end', 'start', 'top', 'bottom']),
  muiFormControl: PropTypes__default.object,
  name: PropTypes__default.string,
  onChange: PropTypes__default.func,
  value: PropTypes__default.string,
  sx: PropTypes__default.object
};

var _CheckboxWithLabel$pr;
var useStyles = styles.makeStyles({
  root: {
    width: "100%"
  }
});

function CheckboxWithLabel(props) {
  var classes = useStyles();
  var id = uuid.v4();
  return /*#__PURE__*/React__default.createElement(FormControlLabel, _extends({}, props, {
    htmlFor: id,
    control: /*#__PURE__*/React__default.createElement(Checkbox, {
      id: id,
      inputProps: {
        role: "switch",
        "aria-checked": props.checked
      },
      size: props.size,
      color: props.color,
      checked: props.checked
    }),
    label: props.label,
    className: classes.root
  }));
}

CheckboxWithLabel.propTypes = (_CheckboxWithLabel$pr = {
  checked: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  label: PropTypes__default.string,
  value: PropTypes__default.string,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  onChange: PropTypes__default.func,
  labelPlacement: PropTypes__default.oneOf(["end", "start", "top", "bottom"]),
  control: PropTypes__default.element
}, _CheckboxWithLabel$pr["color"] = PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']), _CheckboxWithLabel$pr);
CheckboxWithLabel.defaultProps = {
  checked: false,
  onChange: function onChange() {
    return undefined;
  }
};

function Collapse(props) {
  return /*#__PURE__*/React__default.createElement(Collapse$1, props, props.children);
}

Collapse.propTypes = {
  addEndListener: PropTypes__default.func,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  collapsedSize: PropTypes__default.string,
  component: PropTypes__default.string,
  "in": PropTypes__default.bool,
  orientation: PropTypes__default.oneOf(['horizontal', 'vertical']),
  timeout: PropTypes__default.number | PropTypes__default.string,
  sx: PropTypes__default.object
};

function IconButton(props) {
  return /*#__PURE__*/React__default.createElement(IconButtonM, props, /*#__PURE__*/React__default.createElement(Icon, {
    fontSize: props.size
  }, props.children));
}

IconButton.propTypes = {
  children: PropTypes__default.oneOf(iconVariants),
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  edge: PropTypes__default.oneOf(['start', 'end', false]),
  color: PropTypes__default.oneOf(["default", "inherit", "primary", "secondary", "error", "info", "success", "warning"]),
  ariaLabel: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  disableRipple: PropTypes__default.bool,
  onClick: PropTypes__default.func,
  sx: PropTypes__default.object
};

function FloatingActionButton(props) {
  var hasIcon = null;

  if (props.icon) {
    if (props.label) {
      hasIcon = /*#__PURE__*/React.createElement(Icon, {
        sx: {
          mr: 1
        }
      }, props.icon);
    } else {
      hasIcon = /*#__PURE__*/React.createElement(Icon, null, props.icon);
    }
  }

  return /*#__PURE__*/React.createElement(FabM, props, hasIcon, props.label);
}

FloatingActionButton.propTypes = {
  children: PropTypes__default.node,
  icon: PropTypes__default.oneOf(iconVariants),
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(["inherit", "primary", "secondary", "string"]),
  component: PropTypes__default.elementType,
  disabled: PropTypes__default.bool,
  disabledFocusRipple: PropTypes__default.bool,
  disabledRipple: PropTypes__default.bool,
  href: PropTypes__default.string,
  label: PropTypes__default.string,
  size: PropTypes__default.oneOf(["small", "medium", "large"]),
  variant: PropTypes__default.oneOf(["circular", "extended"]),
  sx: PropTypes__default.object
};

var _excluded$1 = ["uxpinRef"];

function LoadingButton(props) {
  var uxpinRef = props.uxpinRef,
      other = _objectWithoutPropertiesLoose(props, _excluded$1);

  return /*#__PURE__*/React__default.createElement(LoadingButtonM, _extends({}, other, {
    ref: uxpinRef,
    startIcon: props.startIcon && /*#__PURE__*/React__default.createElement(Icon, null, props.startIcon),
    endIcon: props.endIcon && /*#__PURE__*/React__default.createElement(Icon, null, props.endIcon)
  }), props.children);
}

LoadingButton.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  href: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  loading: PropTypes__default.bool,
  loadingPosition: PropTypes__default.oneOf(['start', 'center', 'end']),
  loadingIndicator: PropTypes__default.node,
  color: PropTypes__default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  size: PropTypes__default.oneOf(["small", "medium", "large"]),
  variant: PropTypes__default.oneOf(["text", "outlined", "contained"]),
  startIcon: PropTypes__default.oneOf(iconVariants),
  endIcon: PropTypes__default.oneOf(iconVariants),
  sx: PropTypes__default.object,
  onClick: PropTypes__default.func
};

function Radio(props) {
  return /*#__PURE__*/React.createElement(RadioM, props);
}

Radio.propTypes = {
  checked: PropTypes__default.bool,
  checkedIcon: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  disabled: PropTypes__default.bool,
  name: PropTypes__default.string,
  onChange: PropTypes__default.func,
  required: PropTypes__default.bool,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  value: PropTypes__default.string,
  sx: PropTypes__default.object
};
Radio.defaultProps = {};

var useStyles$1 = styles.makeStyles({
  root: {
    width: "100%"
  }
});

function RadioWithLabel(props) {
  var classes = useStyles$1();
  return /*#__PURE__*/React__default.createElement(FormControlLabel, _extends({}, props, {
    htmlFor: "radioWithLabel",
    control: /*#__PURE__*/React__default.createElement(Radio, {
      id: "radioWithLabel",
      inputProps: {
        role: "radio",
        "aria-checked": props.checked
      },
      color: props.color,
      size: props.size
    }),
    label: props.label,
    className: classes.root
  }));
}

RadioWithLabel.propTypes = {
  checked: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  label: PropTypes__default.string,
  value: PropTypes__default.string,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  labelPlacement: PropTypes__default.oneOf(["end", "start", "top", "bottom"]),
  onChange: PropTypes__default.func,
  control: PropTypes__default.element
};
RadioWithLabel.defaultProps = {
  checked: false,
  onChange: function onChange() {
    return undefined;
  }
};

function FormControl(props) {
  return /*#__PURE__*/React__default.createElement(FormControlM, props, props.children);
}

FormControl.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes__default.elementType,
  disabled: PropTypes__default.bool,
  error: PropTypes__default.bool,
  filled: PropTypes__default.bool,
  focused: PropTypes__default.bool,
  required: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function FormLabel(props) {
  return /*#__PURE__*/React__default.createElement(FormLabelM, props, props.children);
}

FormLabel.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),
  component: PropTypes__default.elementType,
  disabled: PropTypes__default.bool,
  error: PropTypes__default.bool,
  filled: PropTypes__default.bool,
  focused: PropTypes__default.bool,
  required: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function RadioGroup(props) {
  return /*#__PURE__*/React__default.createElement(FormControl, {
    component: "fieldset"
  }, /*#__PURE__*/React__default.createElement(FormLabel, {
    component: "legend"
  }, props.grouplabel), /*#__PURE__*/React__default.createElement(RadioGroupM, props, React__default.Children.map(props.children, function (child, index) {
    return /*#__PURE__*/React__default.createElement(FormControlLabel, {
      value: child.props.value,
      checked: child.props.checked,
      control: /*#__PURE__*/React__default.createElement(Radio, {
        id: "radio-group",
        color: props.color,
        size: props.size,
        inputProps: {
          role: "radio",
          "aria-checked": props.checked
        }
      }),
      htmlFor: "radio-group",
      label: child.props.label,
      labelPlacement: props.labelPlacement,
      disabled: child.props.disabled
    });
  })));
}
RadioGroup.propTypes = {
  grouplabel: PropTypes__default.string,
  labelPlacement: PropTypes__default.oneOf(["end", "start", "top", "bottom"]),
  value: PropTypes__default.string,
  children: PropTypes__default.node,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  name: PropTypes__default.string,
  onKeyDown: PropTypes__default.func,
  row: PropTypes__default.bool,
  onChange: PropTypes__default.func
};
RadioGroup.defaultProps = {
  onChange: function onChange() {
    return undefined;
  }
};

function Rating(props) {
  var id = uuid.v4();
  return /*#__PURE__*/React.createElement(RatingM, _extends({}, props, {
    emptyIcon: props.emptyIcon && /*#__PURE__*/React.createElement(Icon, {
      fontSize: "inherit"
    }, props.emptyIcon),
    icon: props.icon && /*#__PURE__*/React.createElement(Icon, {
      fontSize: "inherit"
    }, props.icon),
    getLabelText: function getLabelText(value) {
      return value + " Rating" + (value !== 1 ? 's' : '');
    },
    size: props.size,
    key: id
  }));
}

Rating.propTypes = {
  classes: PropTypes__default.object,
  emptyIcon: PropTypes__default.oneOf(iconVariants),
  icon: PropTypes__default.oneOf(iconVariants),
  max: PropTypes__default.number,
  precision: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  readOnly: PropTypes__default.bool,
  defaultValue: PropTypes__default.number,
  emptyLabelText: PropTypes__default.node,
  getLabelText: PropTypes__default.func,
  highlightSelectedOnly: PropTypes__default.bool,
  name: PropTypes__default.string,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  value: PropTypes__default.number,
  onChange: PropTypes__default.func,
  onChangeActive: PropTypes__default.func,
  sx: PropTypes__default.object
};

function Select(props) {
  var _React$useState = React.useState(''),
      selectedValue = _React$useState[0],
      setSelectedValue = _React$useState[1];

  React.useEffect(function () {
    setSelectedValue(props.value);
  }, [props.value]);

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

  return /*#__PURE__*/React.createElement(FormControlM, {
    variant: props.variant,
    fullWidth: true
  }, /*#__PURE__*/React.createElement(InputLabel, {
    id: "demo-multiple-name-label"
  }, props.label), /*#__PURE__*/React.createElement(SelectM, {
    labelId: "demo-multiple-name-label",
    id: "demo-multiple-name",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    onOpen: props.onOpen,
    onClose: props.onClose,
    value: selectedValue,
    label: props.label
  }, props.children));
}

Select.propTypes = {
  autoWidth: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  defaultValue: PropTypes__default.any,
  defaultOpen: PropTypes__default.bool,
  displayEmpty: PropTypes__default.bool,
  IconComponent: PropTypes__default.elementType,
  id: PropTypes__default.string,
  inputProps: PropTypes__default.object,
  label: PropTypes__default.string,
  labelId: PropTypes__default.string,
  MenuProps: PropTypes__default.object,
  multiple: PropTypes__default.bool,
  "native": PropTypes__default.bool,
  renderValue: PropTypes__default.func,
  SelectDisplayProps: PropTypes__default.object,
  variant: PropTypes__default.oneOf(['filled', 'outlined', 'standard']),
  value: PropTypes__default.string,
  width: PropTypes__default.string,
  onChange: PropTypes__default.func,
  onClose: PropTypes__default.func,
  onOpen: PropTypes__default.func,
  open: PropTypes__default.bool,
  sx: PropTypes__default.object
};

var _Slider$propTypes;
function Slider(props) {
  var id = uuid.v4();
  return /*#__PURE__*/React__default.createElement(SliderM, _extends({
    key: id
  }, props));
}
Slider.propTypes = (_Slider$propTypes = {
  size: PropTypes__default.oneOf(['small', 'medium']),
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  defaultValue: PropTypes__default.number,
  valueLabelDisplay: PropTypes__default.oneOf(['auto', 'off', 'on']),
  valueLabelFormat: PropTypes__default.func | PropTypes__default.string,
  step: PropTypes__default.number,
  marks: PropTypes__default.bool,
  color: PropTypes__default.oneOf(['primary', 'secondary', 'string']),
  orientation: PropTypes__default.oneOf(['vertical', 'horizontal']),
  track: PropTypes__default.oneOf([false, true, 'inverted']),
  disabled: PropTypes__default.bool,
  components: PropTypes__default.string,
  name: PropTypes__default.string,
  disableSwap: PropTypes__default.bool
}, _Slider$propTypes["components"] = PropTypes__default.object, _Slider$propTypes.componentsProps = PropTypes__default.object, _Slider$propTypes.getAriaLabel = PropTypes__default.func, _Slider$propTypes.getAriaValueText = PropTypes__default.func, _Slider$propTypes.scale = PropTypes__default.func, _Slider$propTypes.isRtl = PropTypes__default.bool, _Slider$propTypes.classes = PropTypes__default.object, _Slider$propTypes.sx = PropTypes__default.object, _Slider$propTypes.onChange = PropTypes__default.func, _Slider$propTypes);

function Switch(props) {
  return /*#__PURE__*/React__default.createElement(SwitchM, props);
}

Switch.propTypes = {
  checked: PropTypes__default.bool,
  checkedIcon: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),
  disabled: PropTypes__default.bool,
  disableRipple: PropTypes__default.bool,
  icon: PropTypes__default.node,
  id: PropTypes__default.string,
  onChange: PropTypes__default.func,
  size: PropTypes__default.oneOf(['small', 'medium']),
  value: PropTypes__default.string,
  sx: PropTypes__default.object
};
Switch.defaultProps = {};

var useStyles$2 = styles.makeStyles({
  root: {
    width: "100%"
  }
});

function SwitchWithLabel(props) {
  var classes = useStyles$2();
  var id = uuid.v4();
  return /*#__PURE__*/React__default.createElement(FormControlLabel, _extends({}, props, {
    htmlFor: id,
    control: /*#__PURE__*/React__default.createElement(Switch, {
      id: id,
      inputProps: {
        role: "switch",
        "aria-checked": props.checked
      },
      size: props.size,
      color: props.color
    }),
    label: props.label,
    className: classes.root
  }));
}

SwitchWithLabel.propTypes = {
  checked: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  label: PropTypes__default.string,
  value: PropTypes__default.string,
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes__default.func,
  labelPlacement: PropTypes__default.oneOf(["end", "start", "top", "bottom"]),
  control: PropTypes__default.element,
  color: PropTypes__default.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning'])
};
SwitchWithLabel.defaultProps = {
  checked: false,
  onChange: function onChange() {
    return undefined;
  }
};

function TextField(props) {
  return /*#__PURE__*/React__default.createElement(TextFieldM, props);
}

TextField.propTypes = {
  label: PropTypes__default.string,
  helperText: PropTypes__default.string,
  placeholder: PropTypes__default.string,
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.bool, PropTypes__default.arrayOf(PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.bool]))]),
  autoComplete: PropTypes__default.string,
  classes: PropTypes__default.object,
  variant: PropTypes__default.oneOf(["standard", "outlined", "filled"]),
  size: PropTypes__default.oneOf(['small', 'medium']),
  color: PropTypes__default.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  margin: PropTypes__default.oneOf(['dense', 'none', 'normal']),
  defaultValue: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  required: PropTypes__default.bool,
  error: PropTypes__default.bool,
  fullWidth: PropTypes__default.bool,
  autoFocus: PropTypes__default.bool,
  id: PropTypes__default.string,
  multiline: PropTypes__default.bool,
  maxRows: PropTypes__default.number,
  minRows: PropTypes__default.number,
  name: PropTypes__default.string,
  rows: PropTypes__default.number,
  select: PropTypes__default.bool,
  SelectProps: PropTypes__default.object,
  onChange: PropTypes__default.func,
  sx: PropTypes__default.object
};

function ToggleButton(props) {
  return /*#__PURE__*/React.createElement(ToggleButtonM, props, props.startIcon && /*#__PURE__*/React.createElement(Icon, null, props.startIcon), props.label, props.endIcon && /*#__PURE__*/React.createElement(Icon, null, props.endIcon));
}

ToggleButton.propTypes = {
  children: PropTypes__default.string,
  label: PropTypes__default.string,
  startIcon: PropTypes__default.oneOf(iconVariants),
  endIcon: PropTypes__default.oneOf(iconVariants),
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  disabledFocusRipple: PropTypes__default.bool,
  disabledRipple: PropTypes__default.bool,
  size: PropTypes__default.oneOf(["small", "medium", "large"]),
  value: PropTypes__default.string,
  fullWidth: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  selected: PropTypes__default.bool,
  onChange: PropTypes__default.func,
  sx: PropTypes__default.object
};

function ToggleButtonGroup(props) {
  var _React$useState = React.useState([props.value]),
      toggleValue = _React$useState[0],
      setToggleValue = _React$useState[1];

  React.useEffect(function () {
    setToggleValue([props.value]);
  }, [props.value]);

  var handleChange = function handleChange(event, newAlignment) {
    setToggleValue(newAlignment);
  };

  return /*#__PURE__*/React.createElement(ToggleButtonGroupM, _extends({}, props, {
    value: toggleValue,
    onChange: handleChange,
    "aria-label": "toggle button"
  }), props.children);
}
ToggleButtonGroup.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  onChange: PropTypes__default.func,
  orientation: PropTypes__default.oneOf(['horizontal', 'vertical']),
  size: PropTypes__default.oneOf(["small", "medium", "large"]),
  color: PropTypes__default.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  value: PropTypes__default.string,
  exclusive: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  fullWidth: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function Avatar(props) {
  return /*#__PURE__*/React__default.createElement(AvatarM, _extends({}, props, {
    sx: {
      bgcolor: props.color
    }
  }), props.icon ? /*#__PURE__*/React__default.createElement(Icon, null, props.icon) : props.children);
}

Avatar.propTypes = {
  children: PropTypes__default.string,
  color: PropTypes__default.oneOf(['red', 'pink', 'purple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'orange', 'brown', 'grey']),
  icon: PropTypes__default.string,
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  srcSet: PropTypes__default.string,
  classes: PropTypes__default.object,
  imgProps: PropTypes__default.object,
  sizes: PropTypes__default.string,
  variant: PropTypes__default.oneOf(['circular', 'rounded', 'square']),
  sx: PropTypes__default.object
};

var Root = styles$1.styled('div')({
  flexGrow: 1
});

function Badge(props) {
  return /*#__PURE__*/React__default.createElement(BadgeM, _extends({}, props, {
    showZero: props.showZero,
    anchorOrigin: {
      vertical: "" + props.vertical,
      horizontal: "" + props.horizontal
    }
  }), props.children);
}

Badge.propTypes = {
  vertical: PropTypes__default.oneOf(['top', 'bottom']),
  horizontal: PropTypes__default.oneOf(['right', 'left']),
  badgeContent: PropTypes__default.number,
  max: PropTypes__default.number,
  color: PropTypes__default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]),
  variant: PropTypes__default.oneOf(['dot', 'standard']),
  overlap: PropTypes__default.oneOf(['circular', 'rectangular']),
  invisible: PropTypes__default.bool,
  showZero: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function Divider(props) {
  return /*#__PURE__*/React__default.createElement(DividerM, props);
}

Divider.propTypes = {
  absolute: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  flexItem: PropTypes__default.bool,
  light: PropTypes__default.bool,
  orientation: PropTypes__default.oneOf(['horizontal', 'vertical']),
  textAlign: PropTypes__default.oneOf(['center', 'left', 'right']),
  variant: PropTypes__default.oneOf(['fullWidth', 'inset', 'middle']),
  sx: PropTypes__default.object
};

function List(props) {
  return /*#__PURE__*/React__default.createElement(ListM, props, props.children);
}

List.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  dense: PropTypes__default.bool,
  disablePadding: PropTypes__default.bool,
  subheader: PropTypes__default.node,
  sx: PropTypes__default.object
};

function ListItemIcon(props) {
  return /*#__PURE__*/React__default.createElement(ListItemIconM, props, /*#__PURE__*/React__default.createElement(Icon, {
    color: props.color
  }, props.children));
}

ListItemIcon.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  color: PropTypes__default.oneOf(["inherit", "primary", "secondary", "action", "error", "disabled"]),
  sx: PropTypes__default.object
};

function ListItemText(props) {
  return /*#__PURE__*/React__default.createElement(ListItemTextM, props);
}

ListItemText.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  disableTypography: PropTypes__default.bool,
  inset: PropTypes__default.bool,
  primary: PropTypes__default.node,
  primaryTypographyProps: PropTypes__default.object,
  secondary: PropTypes__default.node,
  secondaryTypographyProps: PropTypes__default.object,
  sx: PropTypes__default.object
};

function ListItemSecondaryAction(props) {
  return /*#__PURE__*/React__default.createElement(ListItemSecondaryActionM, props, props.children);
}

ListItemSecondaryAction.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  className: PropTypes__default.string
};

var _excluded$2 = ["uxpinRef", "isCollapsible", "button", "onClick"];

function ListItem(props) {
  var useStyles = styles.makeStyles(function (theme) {
    return {
      collapsedListItem: {
        borderLeft: "3px solid",
        borderLeftColor: theme.palette.decoration.main,
        backgroundColor: "#f9f9f9",
        '&.Mui-selected': {
          backgroundColor: "#f9f9f9"
        },
        '& .MuiIcon-root': {
          marginLeft: "-3px"
        }
      },
      listItem: {
        '&.Mui-selected': {
          borderLeft: "3px solid",
          borderLeftColor: theme.palette.decoration.main,
          backgroundColor: "#f9f9f9",
          color: theme.palette.primary,
          '& .MuiIcon-root': {
            marginLeft: "-3px"
          }
        }
      },
      collapseContainer: {
        paddingLeft: "36px",
        paddingBottom: "24px",
        paddingTop: "20px",
        borderBottom: "1px solid #0000001f",
        '& .MuiListItem-root': {
          paddingTop: 0,
          paddingBottom: 0,
          '&.Mui-selected': {
            border: 0,
            color: theme.palette.primary.main,
            background: "#ffffff",
            '&.MuiListItem-button:hover': {
              color: theme.palette.primary.main,
              opacity: "1"
            }
          },
          '&.MuiListItem-button:hover': {
            background: "#ffffff",
            opacity: ".5"
          }
        },
        '& .MuiListItem-divider': {
          border: 0
        }
      },
      icon: {
        width: "36px"
      }
    };
  });
  var classes = useStyles(props);

  var _React$useState = React__default.useState(props.collapsed),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  React__default.useEffect(function () {
    setOpen(props.collapsed);
  }, [props]);

  function handleClick() {
    setOpen(!open);
  }

  var isCollapsible = props.isCollapsible,
      button = props.button,
      onClick = props.onClick,
      other = _objectWithoutPropertiesLoose(props, _excluded$2);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
    key: "some-unique-id"
  }, /*#__PURE__*/React__default.createElement(ListItemM__default, _extends({
    button: isCollapsible ? true : button,
    onClick: isCollapsible ? handleClick : onClick,
    className: open ? classes.collapsedListItem : classes.listItem
  }, other), props.icon ? /*#__PURE__*/React__default.createElement(IconM, {
    color: props.iconColor,
    fontSize: "small",
    className: classes.icon
  }, props.icon) : null, /*#__PURE__*/React__default.createElement(ListItemText, {
    primary: props.primary,
    secondary: props.secondary,
    inset: props.inset
  }), isCollapsible ? open ? /*#__PURE__*/React__default.createElement(IconM, null, "expand_less") : /*#__PURE__*/React__default.createElement(IconM, null, "expand_more") : /*#__PURE__*/React__default.createElement(ListItemSecondaryAction, null, props.children)), isCollapsible ? /*#__PURE__*/React__default.createElement(Collapse$1, {
    "in": open,
    timeout: "auto",
    unmountOnExit: true,
    className: classes.collapseContainer
  }, props.children) : null);
}

ListItem.propTypes = {
  primary: PropTypes__default.string,
  secondary: PropTypes__default.string,
  icon: PropTypes__default.string,
  iconColor: PropTypes__default.oneOf(["inherit", "primary", "secondary", "action", "error", "disabled"]),
  alignItems: PropTypes__default.oneOf(["flex-start", "center"]),
  isCollapsible: PropTypes__default.bool,
  collapsed: PropTypes__default.bool,
  button: PropTypes__default.bool,
  selected: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  disableGutters: PropTypes__default.bool,
  inset: PropTypes__default.bool,
  divider: PropTypes__default.bool,
  onClick: PropTypes__default.func,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  component: PropTypes__default.string,
  ContainerComponent: PropTypes__default.node,
  ContainerProps: PropTypes__default.object,
  dense: PropTypes__default.bool,
  focusVisibleClassName: PropTypes__default.string
};
ListItem.defaultProps = {
  iconColor: "primary",
  divider: true
};

function ListItemAvatar(props) {
  return /*#__PURE__*/React__default.createElement(ListItemAvatarM, props, props.children);
}

ListItemAvatar.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function ListItemButton(props) {
  return /*#__PURE__*/React__default.createElement(ListItemButtonM, props, props.children);
}

ListItemButton.propTypes = {
  alignItems: PropTypes__default.oneOf(['center', 'flex-start']),
  autoFocus: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  dense: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  focusVisibleClassName: PropTypes__default.string,
  onClick: PropTypes__default.func,
  selected: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function ListSubheader(props) {
  return /*#__PURE__*/React__default.createElement(ListSubheaderM, props, props.children);
}

ListSubheader.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(["inherit", "primary"]),
  component: PropTypes__default.elementType,
  disableGutters: PropTypes__default.bool,
  disableSticky: PropTypes__default.bool,
  inset: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function Tooltip(props) {
  return /*#__PURE__*/React.createElement(TooltipM, _extends({}, props, {
    PopperProps: {
      keepMounted: true,
      disablePortal: true
    }
  }), /*#__PURE__*/React.createElement("div", null, props.children));
}

Tooltip.propTypes = {
  arrow: PropTypes__default.bool,
  children: PropTypes__default.node,
  onClose: PropTypes__default.func,
  onOpen: PropTypes__default.func,
  open: PropTypes__default.bool,
  placement: PropTypes__default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  title: PropTypes__default.string,
  sx: PropTypes__default.object
};

function Typography(props) {
  return /*#__PURE__*/React__default.createElement(TypographyM, props, props.children);
}

Typography.propTypes = {
  children: PropTypes__default.node,
  variant: PropTypes__default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "inherit"]),
  align: PropTypes__default.oneOf(["inherit", "left", "center", "right", "justify"]),
  color: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  bgcolor: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  display: PropTypes__default.oneOf(["initial", "block", "inline"]),
  gutterBottom: PropTypes__default.bool,
  paragraph: PropTypes__default.bool,
  noWrap: PropTypes__default.bool,
  component: PropTypes__default.node,
  headlineMapping: PropTypes__default.object,
  classes: PropTypes__default.object,
  padding: PropTypes__default.string,
  paddingTop: PropTypes__default.string,
  paddingRight: PropTypes__default.string,
  paddingBottom: PropTypes__default.string,
  paddingLeft: PropTypes__default.string,
  margin: PropTypes__default.string,
  marginTop: PropTypes__default.string,
  marginRight: PropTypes__default.string,
  marginBottom: PropTypes__default.string,
  marginLeft: PropTypes__default.string,
  border: PropTypes__default.number,
  borderTop: PropTypes__default.number,
  borderRight: PropTypes__default.number,
  borderBottom: PropTypes__default.number,
  borderLeft: PropTypes__default.number,
  borderColor: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  borderRadius: PropTypes__default.string,
  sx: PropTypes__default.object
};

function BottomNavigation(props) {
  return /*#__PURE__*/React__default.createElement(BottomNavigationM, props, props.children);
}

BottomNavigation.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  onChange: PropTypes__default.func,
  showLabels: PropTypes__default.bool,
  sx: PropTypes__default.object,
  value: PropTypes__default.string
};

function BottomNavigationAction(props) {
  return /*#__PURE__*/React__default.createElement(BottomNavigationActionM, _extends({}, props, {
    icon: /*#__PURE__*/React__default.createElement(Icon, null, props.icon)
  }));
}

BottomNavigationAction.propTypes = {
  classes: PropTypes__default.object,
  icon: PropTypes__default.oneOf(iconVariants),
  label: PropTypes__default.string,
  showLabel: PropTypes__default.bool,
  value: PropTypes__default.string,
  sx: PropTypes__default.object
};

function Breadcrumbs(props) {
  return /*#__PURE__*/React__default.createElement(BreadcrumbsM, props, props.children);
}

Breadcrumbs.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.node,
  expandText: PropTypes__default.string,
  itemsAfterCollapse: PropTypes__default.number,
  itemsBeforeCollapse: PropTypes__default.number,
  maxItems: PropTypes__default.number,
  separator: PropTypes__default.node,
  sx: PropTypes__default.object
};

function Link(props) {
  return /*#__PURE__*/React__default.createElement(LinkM, props, props.children);
}

Link.propTypes = {
  children: PropTypes__default.node,
  href: PropTypes__default.string,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  component: PropTypes__default.node,
  TypographyClasses: PropTypes__default.object,
  underline: PropTypes__default.oneOf(['always', 'hover', 'none']),
  variant: PropTypes__default.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']),
  sx: PropTypes__default.object,
  onClick: PropTypes__default.func
};

function Menu(props) {
  var _React$useState = React.useState(props.open),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, props.trigger === "icon" ? /*#__PURE__*/React.createElement(IconButtonM, {
    "aria-label": props.label,
    "aria-haspopup": "true",
    onClick: handleClick,
    color: props.color
  }, /*#__PURE__*/React.createElement(IconM, null, props.icon)) : /*#__PURE__*/React.createElement(Button$1, {
    "aria-haspopup": "true",
    variant: props.buttonVariant,
    color: props.color,
    onClick: handleClick
  }, props.label), /*#__PURE__*/React.createElement(MenuM, {
    id: "basic-menu",
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    MenuListProps: {
      'aria-labelledby': 'basic-button'
    }
  }, props.children.map(function (item, key) {
    {
      console.log(item.props.children);
    }
    return /*#__PURE__*/React.createElement(MenuItem$1, _extends({
      key: key,
      onClick: handleClose
    }, item.props));
  })));
}
Menu.propTypes = {
  trigger: PropTypes__default.oneOf(["icon", "button"]),
  icon: PropTypes__default.oneOf(['none', '3d_rotation', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location', 'add_shopping_cart', 'add_to_photos', 'add_to_queue', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay', 'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'all_inclusive', 'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward', 'art_track', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money', 'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beach_access', 'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark', 'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'branding_watermark', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bubble_chart', 'bug_report', 'build', 'burst_mode', 'business', 'business_center', 'cached', 'cake', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel', 'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly', 'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare', 'compare_arrows', 'computer', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate', 'copyright', 'create', 'create_new_folder', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever', 'delete_sweep', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'devices', 'devices_other', 'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'dock', 'domain', 'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle', 'drive_eta', 'dvr', 'edit', 'edit_location', 'eject', 'email', 'enhanced_encryption', 'equalizer', 'error', 'error_outline', 'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'featured_play_list', 'featured_video', 'feedback', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'first_page', 'fitness_center', 'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff', 'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'free_breakfast', 'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'gamepad', 'games', 'gavel', 'gesture', 'get_app', 'gif', 'golf_course', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight', 'highlight_off', 'history', 'home', 'hot_tub', 'hotel', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'image', 'image_aspect_ratio', 'import_contacts', 'import_export', 'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'kitchen', 'label', 'label_outline', 'landscape', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books', 'library_music', 'lightbulb_outline', 'line_style', 'line_weight', 'linear_scale', 'link', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'mail', 'mail_outline', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie', 'movie_creation', 'movie_filter', 'multiline_chart', 'music_note', 'music_video', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'network_cell', 'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption', 'no_sim', 'not_interested', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'pan_tool', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'person_pin_circle', 'personal_video', 'pets', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outlined', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'poll', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'print', 'priority_high', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'record_voice_over', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_from_queue', 'remove_red_eye', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant', 'restaurant_menu', 'restore', 'restore_page', 'ring_volume', 'room', 'room_service', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed', 'rv_hookup', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'short_text', 'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'slow_motion_video', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_fields', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality', 'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'unarchive', 'undo', 'unfold_less', 'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'watch_later', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map']),
  label: PropTypes__default.string,
  buttonVariant: PropTypes__default.oneOf(["text", "outlined", "contained"]),
  color: PropTypes__default.oneOf(['primary', 'secondary', 'error', 'success', 'warning']),
  children: PropTypes__default.node,
  sx: PropTypes__default.object
};
Menu.defaultProps = {
  trigger: "button",
  label: "Menu Button",
  buttonVariant: "contained",
  icon: "more_vert"
};

function MenuItem(props) {
  return /*#__PURE__*/React.createElement(MenuItem$1, props, props.children);
}

MenuItem.propTypes = {
  autoFocus: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  dense: PropTypes__default.bool,
  disableGutters: PropTypes__default.bool,
  divider: PropTypes__default.bool,
  focusVisibleClassName: PropTypes__default.string,
  sx: PropTypes__default.object,
  value: PropTypes__default.string,
  onClick: PropTypes__default.func
};

function Pagination(props) {
  return /*#__PURE__*/React__default.createElement(PaginationM, props);
}

Pagination.propTypes = {
  count: PropTypes__default.number,
  boundaryCount: PropTypes__default.number,
  siblingCount: PropTypes__default.number,
  defaultPage: PropTypes__default.number,
  page: PropTypes__default.number,
  hideNextButton: PropTypes__default.bool,
  hidePrevButton: PropTypes__default.bool,
  showFirstButton: PropTypes__default.bool,
  showLastButton: PropTypes__default.bool,
  color: PropTypes__default.oneOf(['primary', 'secondary', 'standard']),
  variant: PropTypes__default.oneOf(['outlined', 'text']),
  shape: PropTypes__default.oneOf(['circular', 'rounded']),
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes__default.bool,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object,
  renderItem: PropTypes__default.func,
  getItemAriaLabel: PropTypes__default.func,
  onChange: PropTypes__default.func
};

function Tab(props) {
  return /*#__PURE__*/React__default.createElement(TabM, props, props.children);
}

Tab.propTypes = {
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  disableRipple: PropTypes__default.bool,
  fullWidth: PropTypes__default.bool,
  icon: PropTypes__default.oneOf([PropTypes__default.node, PropTypes__default.string]),
  indicator: PropTypes__default.node,
  label: PropTypes__default.node,
  onChange: PropTypes__default.func,
  onClick: PropTypes__default.func,
  selected: PropTypes__default.bool,
  textColor: PropTypes__default.oneOf(['secondary', 'primary', 'inherit']),
  value: PropTypes__default.string,
  wrapped: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function Tabs(props) {
  return /*#__PURE__*/React__default.createElement(TabsM, props, props.children);
}

Tabs.propTypes = {
  action: PropTypes__default.func,
  allowScrollButtonsMobile: PropTypes__default.bool,
  centered: PropTypes__default.bool,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  ariaLabel: PropTypes__default.string,
  ariaLabelledBy: PropTypes__default.string,
  component: PropTypes__default.string,
  fullWidth: PropTypes__default.bool,
  indicatorColor: PropTypes__default.oneOf(['secondary', 'primary']),
  onChange: PropTypes__default.func,
  orientation: PropTypes__default.oneOf(['horizontal', 'vertical']),
  scrollable: PropTypes__default.bool,
  ScrollButtonComponent: PropTypes__default.node,
  scrollButtons: PropTypes__default.oneOf(['auto', 'on', 'off']),
  selectionFollowsFocus: PropTypes__default.bool,
  TabsIndicatorProps: PropTypes__default.object,
  textColor: PropTypes__default.oneOf(['secondary', 'primary', 'inherit']),
  theme: PropTypes__default.object,
  value: PropTypes__default.number,
  defaultValue: PropTypes__default.number,
  variant: PropTypes__default.oneOf(['standard', 'scrollable', 'fullWidth']),
  sx: PropTypes__default.object,
  TabIndicatorProps: PropTypes__default.object,
  TabScrollButtonProps: PropTypes__default.object,
  visibleScrollbar: PropTypes__default.bool
};

function Toolbar(props) {
  return /*#__PURE__*/React__default.createElement(ToolbarM, _extends({}, props, {
    sx: {
      "justifyContent": props.justifyContent
    }
  }), props.children);
}

Toolbar.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  disableGutters: PropTypes__default.bool,
  sx: PropTypes__default.object,
  variant: PropTypes__default.oneOf(["regular", "dense"]),
  justifyContent: PropTypes__default.oneOf(["center", "flex-end", "flex-start", "space-around", "space-between", "space-evenly", "stretch"])
};

function AlertTitle(props) {
  return /*#__PURE__*/React__default.createElement(AlertTitleM, props, props.children);
}

AlertTitle.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

var _excluded$3 = ["isOpen", "icon", "title", "hasClose", "onClose"];

function Alert(props) {
  var _React$useState = React__default.useState(props.isOpen),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  React__default.useEffect(function () {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  var icon = props.icon,
      title = props.title,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$3);

  return /*#__PURE__*/React__default.createElement(Collapse$1, {
    "in": open
  }, /*#__PURE__*/React__default.createElement(AlertM, _extends({}, otherProps, {
    icon: icon ? /*#__PURE__*/React__default.createElement(Icon, {
      fontSize: "inherit"
    }, icon) : null,
    action: props.hasClose ? /*#__PURE__*/React__default.createElement(IconButton, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpen(false);
      }
    }, props.action) : null,
    sx: {
      mb: 2
    }
  }), title ? /*#__PURE__*/React__default.createElement(AlertTitle, null, title) : null, props.children));
}

Alert.propTypes = {
  title: PropTypes__default.string,
  icon: PropTypes__default.oneOf(iconVariants),
  children: PropTypes__default.string,
  action: PropTypes__default.oneOf(iconVariants),
  isOpen: PropTypes__default.bool,
  hasClose: PropTypes__default.bool,
  iconMapping: PropTypes__default.object,
  classes: PropTypes__default.object,
  closeText: PropTypes__default.string,
  color: PropTypes__default.oneOf(['error', 'info', 'success', 'warning']),
  severity: PropTypes__default.oneOf(["success", "error", "info", "warning"]),
  variant: PropTypes__default.oneOf(['filled', 'outlined', 'standard']),
  role: PropTypes__default.string,
  onClose: PropTypes__default.func,
  onChange: PropTypes__default.func,
  sx: PropTypes__default.object
};
Alert.defaultProps = {
  isOpen: true,
  onChange: function onChange() {
    return undefined;
  },
  action: "close",
  hasClose: true,
  title: "This is a title",
  children: "This is the alert copy"
};

function CircularProgress(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "fit-content"
    }
  }, /*#__PURE__*/React__default.createElement(CircularProgressM, props));
}

CircularProgress.propTypes = {
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  variant: PropTypes__default.oneOf(['determinate', 'indeterminate', 'static']),
  size: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string]),
  color: PropTypes__default.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit']),
  style: PropTypes__default.object,
  thickness: PropTypes__default.number,
  value: PropTypes__default.number,
  disableShrink: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function DialogActions(props) {
  return /*#__PURE__*/React__default.createElement(DialogActionsM, props, props.children);
}

DialogActions.propTypes = {
  children: PropTypes__default.node,
  disableSpacing: PropTypes__default.bool,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function DialogContentText(props) {
  return /*#__PURE__*/React__default.createElement(DialogContentTextM, props, props.children);
}

DialogContentText.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function DialogTitle(props) {
  return /*#__PURE__*/React__default.createElement(DialogTitleM, props, props.children, props.hasClose ? /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-label": "close",
    onClick: props.onClick,
    sx: {
      position: 'absolute',
      right: 8,
      top: 8
    }
  }, "close") : null);
}

DialogTitle.propTypes = {
  children: PropTypes__default.node,
  hasClose: PropTypes__default.bool,
  onClick: PropTypes__default.func,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function DialogContent(props) {
  return /*#__PURE__*/React__default.createElement(DialogContentM, props, props.children);
}

DialogContent.propTypes = {
  children: PropTypes__default.node,
  dividers: PropTypes__default.bool,
  sx: PropTypes__default.object,
  classes: PropTypes__default.object
};

function LinearProgress(props) {
  return /*#__PURE__*/React__default.createElement(LinearProgressM, props);
}

LinearProgress.propTypes = {
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  color: PropTypes__default.oneOf(['primary', 'secondary', 'inherit']),
  value: PropTypes__default.number,
  valueBuffer: PropTypes__default.number,
  variant: PropTypes__default.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  sx: PropTypes__default.object
};

var _excluded$4 = ["uxpinRef"];
function Snackbar(props) {
  var uxpinRef = props.uxpinRef,
      other = _objectWithoutPropertiesLoose(props, _excluded$4);

  var _React$useState = React.useState(props.open),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  React.useEffect(function () {
    setOpen(props.open);
  }, [props.open]);

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  var action = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, props.undo ? /*#__PURE__*/React.createElement(Button$1, {
    color: "primary",
    size: "small",
    onClick: handleClose
  }, "UNDO") : null, props.children, /*#__PURE__*/React.createElement(IconButton, {
    size: "small",
    "aria-label": "close",
    color: "inherit",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(Icon, {
    fontSize: "small"
  }, "close"))));
  return /*#__PURE__*/React.createElement(SnackbarM, _extends({}, other, {
    open: open,
    action: action,
    ref: uxpinRef
  }));
}
Snackbar.propTypes = {
  message: PropTypes__default.string,
  open: PropTypes__default.bool,
  undo: PropTypes__default.bool,
  action: PropTypes__default.node,
  actionOrigin: PropTypes__default.object,
  autoHideDuration: PropTypes__default.number,
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  ClickAwayListenerProps: PropTypes__default.object,
  ContentProps: PropTypes__default.object,
  disableWindowBlurListener: PropTypes__default.bool,
  key: PropTypes__default.node,
  onClose: PropTypes__default.func,
  resumeHideDuration: PropTypes__default.number,
  TransitionComponent: PropTypes__default.elementType,
  TransitionProps: PropTypes__default.object,
  sx: PropTypes__default.object
};

var _excluded$5 = ["uxpinRef"];

function Skeleton(props) {
  var other = _objectWithoutPropertiesLoose(props, _excluded$5);

  return /*#__PURE__*/React.createElement(SkeletonM, other, props.children);
}

Skeleton.propTypes = {
  animation: PropTypes__default.oneOf(['pulse', 'wave', 'false']),
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  height: PropTypes__default.number,
  variant: PropTypes__default.oneOf(['circular', 'rectangular', 'text']),
  width: PropTypes__default.number,
  sx: PropTypes__default.object
};

function Table(props) {
  return /*#__PURE__*/React__default.createElement(TableM, props, props.children);
}

Table.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  padding: PropTypes__default.oneOf(['checkbox', 'none', 'normal']),
  size: PropTypes__default.oneOf(['small', 'medium']),
  stickyHeader: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function TableCell(props) {
  return /*#__PURE__*/React__default.createElement(TableCellM, props, props.children);
}

TableCell.propTypes = {
  children: PropTypes__default.node,
  align: PropTypes__default.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  sortDirection: PropTypes__default.oneOf(['asc', 'desc', 'false']),
  variant: PropTypes__default.oneOf(['body', 'footer', 'head']),
  padding: PropTypes__default.oneOf(['checkbox', 'none', 'normal']),
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  scope: PropTypes__default.string,
  sx: PropTypes__default.object
};

function TableBody(props) {
  return /*#__PURE__*/React__default.createElement(TableBodyM, props, props.children);
}

TableBody.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  sx: PropTypes__default.object
};

function TableHead(props) {
  return /*#__PURE__*/React__default.createElement(TableHeadM, props, props.children);
}

TableHead.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  sx: PropTypes__default.object
};

function TableRow(props) {
  return /*#__PURE__*/React__default.createElement(TableRowM, props, props.children);
}

TableRow.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.elementType,
  hover: PropTypes__default.bool,
  selected: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function FormGroup(props) {
  return /*#__PURE__*/React__default.createElement(FormGroupM, props, props.children);
}

FormGroup.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  row: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function FormHelperText(props) {
  return /*#__PURE__*/React__default.createElement(FormHelperTextM, props, props.children);
}

FormHelperText.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.node,
  disabled: PropTypes__default.bool,
  error: PropTypes__default.bool,
  filled: PropTypes__default.bool,
  focused: PropTypes__default.bool,
  margin: PropTypes__default.oneOf(["dense"]),
  required: PropTypes__default.bool,
  variant: PropTypes__default.oneOf(["standard", "outlined", "filled"]),
  sx: PropTypes__default.object
};

var _excluded$6 = ["uxpinRef"];

function Box(props) {
  var uxpinRef = props.uxpinRef,
      other = _objectWithoutPropertiesLoose(props, _excluded$6);

  return /*#__PURE__*/React__default.createElement(BoxM, _extends({
    ref: uxpinRef
  }, other), !props.children ? /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("center", null, /*#__PURE__*/React__default.createElement("p", null, "Drag components into this wrapper"))) : props.children);
}

Box.propTypes = {
  children: PropTypes__default.node,
  clone: PropTypes__default.bool,
  color: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  bgcolor: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  padding: PropTypes__default.string,
  paddingTop: PropTypes__default.string,
  paddingRight: PropTypes__default.string,
  paddingBottom: PropTypes__default.string,
  paddingLeft: PropTypes__default.string,
  margin: PropTypes__default.string,
  marginTop: PropTypes__default.string,
  marginRight: PropTypes__default.string,
  marginBottom: PropTypes__default.string,
  marginLeft: PropTypes__default.string,
  border: PropTypes__default.number,
  borderTop: PropTypes__default.number,
  borderRight: PropTypes__default.number,
  borderBottom: PropTypes__default.number,
  borderLeft: PropTypes__default.number,
  borderColor: PropTypes__default.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),
  borderRadius: PropTypes__default.string,
  boxShadow: PropTypes__default.number,
  textAlign: PropTypes__default.oneOf(["left", "center", "right"]),
  sx: PropTypes__default.object
};
Box.defaultProps = {
  sx: {
    "padding": "",
    "padding-top": "",
    "padding-right": "",
    "padding-bottom": "",
    "padding-left": "",
    "margin": "",
    "margin-top": "",
    "margin-right": "",
    "margin-bottom": "",
    "margin-left": ""
  }
};

function Grid(props) {
  return /*#__PURE__*/React__default.createElement(GridM, _extends({}, props, {
    spacing: props.spacing
  }), props.children);
}

Grid.propTypes = {
  alignContent: PropTypes__default.oneOf(["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"]),
  alignItems: PropTypes__default.oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  className: PropTypes__default.string,
  component: PropTypes__default.string,
  container: PropTypes__default.bool,
  direction: PropTypes__default.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  order: PropTypes__default.number,
  item: PropTypes__default.bool,
  justifyContent: PropTypes__default.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]),
  lg: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool, PropTypes__default.string]),
  md: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool, PropTypes__default.string]),
  sm: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool, PropTypes__default.string]),
  spacing: PropTypes__default.oneOf(["0", "8", "16", "24", "32", "40"]),
  wrap: PropTypes__default.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  xl: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool, PropTypes__default.string]),
  xs: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool, PropTypes__default.string]),
  zeroMinWidth: PropTypes__default.bool,
  sx: PropTypes__default.object
};

var _excluded$7 = ["hasDivider"];

function Stack(props) {
  var dividerOrientation = '';

  if (props.direction === "row" || props.direction === "row-reverse") {
    dividerOrientation = "vertical";
  } else {
    dividerOrientation = "horizontal";
  }

  var hasDivider = props.hasDivider,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$7);

  return /*#__PURE__*/React.createElement(StackM, _extends({}, otherProps, {
    divider: hasDivider && /*#__PURE__*/React.createElement(DividerM, {
      orientation: dividerOrientation,
      flexItem: true
    })
  }), props.children);
}

Stack.propTypes = {
  children: PropTypes__default.node,
  direction: PropTypes__default.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  spacing: PropTypes__default.number,
  divider: PropTypes__default.node,
  hasDivider: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function Accordion(props) {
  var _React$useState = React__default.useState(''),
      expanded = _React$useState[0],
      setExpanded = _React$useState[1];

  React__default.useEffect(function () {
    setExpanded(props.expanded);
  }, [props.expanded]);
  return /*#__PURE__*/React__default.createElement(AccordionM, _extends({
    expanded: expanded
  }, props), props.children);
}

Accordion.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  defaultExpanded: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  disableGutters: PropTypes__default.bool,
  expanded: PropTypes__default.bool,
  onChange: PropTypes__default.func,
  square: PropTypes__default.bool,
  TransitionComponent: PropTypes__default.elementType,
  TransitionProps: PropTypes__default.object,
  sx: PropTypes__default.object
};
Accordion.defaultProps = {
  expanded: false
};

function AccordionDetails(props) {
  return /*#__PURE__*/React__default.createElement(AccordionDetailsM, props, props.children);
}

AccordionDetails.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function AccordionSummary(props) {
  return /*#__PURE__*/React__default.createElement(AccordionSummaryM, _extends({}, props, {
    expandIcon: /*#__PURE__*/React__default.createElement(Icon, null, props.expandedIcon)
  }), props.children);
}

AccordionSummary.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  expandedIcon: PropTypes__default.oneOf(iconVariants),
  focusVisibleClassName: PropTypes__default.string,
  sx: PropTypes__default.object
};

function AppBar(props) {
  return /*#__PURE__*/React__default.createElement(AppBarM, _extends({}, props, {
    sx: props.sx
  }), props.children);
}

AppBar.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  color: PropTypes__default.oneOf(['inherit', 'primary', 'secondary', 'transparent']),
  enableColorOnDark: PropTypes__default.bool,
  position: PropTypes__default.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  sx: PropTypes__default.object
};

function Card(props) {
  return /*#__PURE__*/React__default.createElement(CardM, props, props.children);
}

Card.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  raised: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function CardActions(props) {
  return /*#__PURE__*/React__default.createElement(CardActionsM, props, props.children);
}

CardActions.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  disableSpacing: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function CardActionArea(props) {
  return /*#__PURE__*/React__default.createElement(CardActionAreaM, props, props.children);
}

CardActionArea.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  sx: PropTypes__default.object
};

function CardContent(props) {
  return /*#__PURE__*/React__default.createElement(CardContentM, props, props.children);
}

CardContent.propTypes = {
  children: PropTypes__default.node,
  classes: PropTypes__default.object,
  component: PropTypes__default.string,
  sx: PropTypes__default.object
};

function CardHeader(props) {
  return /*#__PURE__*/React__default.createElement(CardHeaderM, _extends({}, props, {
    avatar: props.avatar && /*#__PURE__*/React__default.createElement(Avatar, {
      color: props.color
    }, props.avatar),
    action: props.action && /*#__PURE__*/React__default.createElement(IconButton, {
      "aria-label": props.ariaLabel,
      onClick: props.iconOnClick
    }, /*#__PURE__*/React__default.createElement(Icon, null, props.action))
  }), props.children);
}

CardHeader.propTypes = {
  action: PropTypes__default.oneOf(iconVariants),
  avatar: PropTypes__default.string,
  color: PropTypes__default.oneOf(['red', 'pink', 'purple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'orange', 'brown', 'grey']),
  classes: PropTypes__default.object,
  component: PropTypes__default.string,
  disableTypography: PropTypes__default.bool,
  subheader: PropTypes__default.node,
  subheaderTypograhyProps: PropTypes__default.object,
  title: PropTypes__default.node,
  ariaLabel: PropTypes__default.string,
  titleTypographyProps: PropTypes__default.object,
  sx: PropTypes__default.object,
  iconOnClick: PropTypes__default.func
};

function CardMedia(props) {
  return /*#__PURE__*/React__default.createElement(CardMediaM, _extends({
    controls: true
  }, props));
}

CardMedia.propTypes = {
  classes: PropTypes__default.object,
  component: PropTypes__default.oneOf(["img", "video", "audio"]),
  height: PropTypes__default.number,
  image: PropTypes__default.string,
  src: PropTypes__default.string,
  sx: PropTypes__default.object
};
CardMedia.defaultProps = {
  component: "img",
  height: 120,
  image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
};

function Paper(props) {
  return /*#__PURE__*/React__default.createElement(PaperM, props, props.children);
}

Paper.propTypes = {
  children: PropTypes__default.node,
  elevation: PropTypes__default.number,
  variant: PropTypes__default.oneOf(['elevation', 'outlined']),
  classes: PropTypes__default.object,
  component: PropTypes__default.node,
  square: PropTypes__default.bool,
  sx: PropTypes__default.object
};

function Image(props) {
  return /*#__PURE__*/React__default.createElement("img", {
    alt: props.alt,
    src: props.src,
    height: props.height,
    width: props.width,
    style: _extends({
      objectFit: props.objectFit,
      height: props.height,
      width: props.width
    }, props.style)
  });
}

Image.propTypes = {
  alt: PropTypes__default.string,
  height: PropTypes__default.string,
  width: PropTypes__default.string,
  objectFit: PropTypes__default.oneOf(["fill", "contain", "cover", "none", "scale-down"]),
  src: PropTypes__default.string,
  style: PropTypes__default.object
};
Image.defaultProps = {
  src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

var boilerplateTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#ffffff"
    },
    decoration: {
      main: "#2684FF"
    },
    error: {
      main: "#e72400"
    },
    headerBadges: {
      main: "#2684FF"
    }
  }
};

var theme = styles$1.createTheme(boilerplateTheme);
function UXPinWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(styles$1.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(PaperM, {
    elevation: 0,
    style: {
      backgroundColor: "transparent"
    }
  }, children));
}

exports.Accordion = Accordion;
exports.AccordionDetails = AccordionDetails;
exports.AccordionSummary = AccordionSummary;
exports.Alert = Alert;
exports.AlertTitle = AlertTitle;
exports.AppBar = AppBar;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.BottomNavigation = BottomNavigation;
exports.BottomNavigationAction = BottomNavigationAction;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.CardActionArea = CardActionArea;
exports.CardActions = CardActions;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
exports.CardMedia = CardMedia;
exports.Checkbox = Checkbox;
exports.CheckboxWithLabel = CheckboxWithLabel;
exports.CircularProgress = CircularProgress;
exports.Collapse = Collapse;
exports.DialogActions = DialogActions;
exports.DialogContent = DialogContent;
exports.DialogContentText = DialogContentText;
exports.DialogTitle = DialogTitle;
exports.Divider = Divider;
exports.FloatingActionButton = FloatingActionButton;
exports.FormControl = FormControl;
exports.FormControlLabel = FormControlLabel;
exports.FormGroup = FormGroup;
exports.FormHelperText = FormHelperText;
exports.FormLabel = FormLabel;
exports.Grid = Grid;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.LinearProgress = LinearProgress;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.ListItemAvatar = ListItemAvatar;
exports.ListItemButton = ListItemButton;
exports.ListItemIcon = ListItemIcon;
exports.ListItemText = ListItemText;
exports.ListSubheader = ListSubheader;
exports.LoadingButton = LoadingButton;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.Pagination = Pagination;
exports.Paper = Paper;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.RadioWithLabel = RadioWithLabel;
exports.Rating = Rating;
exports.Select = Select;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Snackbar = Snackbar;
exports.Stack = Stack;
exports.Switch = Switch;
exports.SwitchWithLabel = SwitchWithLabel;
exports.Tab = Tab;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TextField = TextField;
exports.ToggleButton = ToggleButton;
exports.ToggleButtonGroup = ToggleButtonGroup;
exports.Toolbar = Toolbar;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.UXPinWrapper = UXPinWrapper;
//# sourceMappingURL=index.js.map
