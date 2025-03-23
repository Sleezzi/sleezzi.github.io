import { DetailedHTMLProps, HTMLAttributes } from "react";

const icon = [
	"cake",
	"sports_esports",
	"code",
	"api",
	"search",
	"search",
	"home",
	"menu",
	"close",
	"settings",
	"check_circle",
	"favorite",
	"add",
	"delete",
	"arrow_back",
	"star",
	"chevron_right",
	"logout",
	"arrow_forward_ios",
	"add_circle",
	"cancel",
	"arrow_back_ios",
	"arrow_forward",
	"arrow_drop_down",
	"more_vert",
	"check",
	"check_box",
	"open_in_new",
	"toggle_on",
	"refresh",
	"check_box_outline_blank",
	"login",
	"chevron_left",
	"radio_button_unchecked",
	"more_horiz",
	"download",
	"apps",
	"arrow_right_alt",
	"radio_button_checked",
	"filter_alt",
	"remove",
	"bolt",
	"arrow_upward",
	"toggle_off",
	"filter_list",
	"delete_forever",
	"autorenew",
	"key",
	"block",
	"sync",
	"arrow_downward",
	"sort",
	"add_box",
	"arrow_back_ios_new",
	"restart_alt",
	"shopping_cart_checkout",
	"menu_open",
	"expand_circle_down",
	"undo",
	"backspace",
	"arrow_circle_right",
	"done_all",
	"arrow_right",
	"do_not_disturb_on",
	"open_in_full",
	"manage_search",
	"double_arrow",
	"sync_alt",
	"done_outline",
	"zoom_in",
	"drag_indicator",
	"fullscreen",
	"ios_share",
	"keyboard_double_arrow_right",
	"star_half",
	"settings_accessibility",
	"arrow_drop_up",
	"reply",
	"exit_to_app",
	"unfold_more",
	"cached",
	"library_add",
	"terminal",
	"select_check_box",
	"change_circle",
	"disabled_by_default",
	"swap_horiz",
	"swap_vert",
	"close_fullscreen",
	"app_registration",
	"dataset",
	"download_for_offline",
	"arrow_circle_up",
	"arrow_circle_left",
	"minimize",
	"file_open",
	"open_with",
	"add_task",
	"start",
	"keyboard_double_arrow_left",
	"keyboard_double_arrow_down",
	"create_new_folder",
	"upload",
	"forward",
	"downloading",
	"compare_arrows",
	"settings_applications",
	"publish",
	"redo",
	"zoom_out",
	"arrow_left",
	"token",
	"html",
	"switch_access_shortcut",
	"fullscreen_exit",
	"arrow_circle_down",
	"sort_by_alpha",
	"indeterminate_check_box",
	"delete_sweep",
	"first_page",
	"view_timeline",
	"keyboard_double_arrow_up",
	"settings_backup_restore",
	"sync_problem",
	"assistant_navigation",
	"arrow_drop_down_circle",
	"heart_plus",
	"clear_all",
	"density_medium",
	"expand",
	"arrow_outward",
	"subdirectory_arrow_right",
	"filter_alt_off",
	"last_page",
	"unfold_less",
	"download_done",
	"123",
	"swipe_left",
	"saved_search",
	"system_update_alt",
	"output",
	"search_off",
	"place_item",
	"javascript",
	"swipe_up",
	"maximize",
	"select_all",
	"fit_screen",
	"check_small",
	"hide_source",
	"dynamic_form",
	"swipe_right",
	"browse_gallery",
	"switch_access_shortcut_add",
	"density_small",
	"css",
	"assistant_direction",
	"move_up",
	"youtube_searched_for",
	"data_thresholding",
	"swap_horizontal_circle",
	"install_mobile",
	"abc",
	"move_down",
	"dataset_linked",
	"restore_from_trash",
	"browse_activity",
	"enable",
	"install_desktop",
	"keyboard_command_key",
	"view_kanban",
	"reply_all",
	"switch_left",
	"compress",
	"star_rate",
	"swipe_down",
	"apps_outage",
	"swap_vertical_circle",
	"remove_done",
	"filter_list_off",
	"hide",
	"sync_disabled",
	"swipe_vertical",
	"more_up",
	"switch_right",
	"keyboard_control_key",
	"pinch",
	"tab",
	"eject",
	"key_off",
	"php",
	"view_cozy",
	"subdirectory_arrow_left",
	"transcribe",
	"do_not_disturb_off",
	"send_time_extension",
	"width_normal",
	"view_comfy_alt",
	"heart_minus",
	"share_reviews",
	"progress_activity",
	"width_full",
	"cycle",
	"unfold_more_double",
	"file_download_off",
	"view_compact_alt",
	"extension_off",
	"open_in_new_off",
	"check_indeterminate_small",
	"more_down",
	"width_wide",
	"repartition",
	"density_large",
	"swipe_left_alt",
	"swipe_down_alt",
	"person",
	"account_circle",
	"mail",
	"edit",
	"shopping_cart",
	"pin_drop",
	"description",
	"play_arrow",
	"local_shipping",
	"school",
	"phone_iphone",
	"dark_mode",
	"badge",
	"apartment",
	"house",
	"stadia_controller",
	"view_object_track",
	"nest_gale_wifi",
	"book",
	"group",
	"error",
	"report",
	"warning",
	"query_stats",
	"folder_open",
	"language",
	"work",
	"experiment",
	"call"
] as const;
type CustomProps = {
	/** The icon list is incomplete, go to https://fonts.google.com/icons and add them to the array */
	icon: typeof icon[number],
	/** The icon list is incomplete, go to https://fonts.google.com/icons and add them to the array */
	children?: never
} | {
	/** The icon list is incomplete, go to https://fonts.google.com/icons and add them to the array */
	icon?: never,
	/** The icon list is incomplete, go to https://fonts.google.com/icons and add them to the array */
	children: typeof icon[number]
}

type Props = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & CustomProps

function Icon(props: Props) {
	return (<span {...props} className={`${props.className || ""} material-symbols-outlined`}>{props.icon}</span>)
}

export default Icon;
export const IconList = icon;