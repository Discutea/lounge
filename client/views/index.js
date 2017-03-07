module.exports = {

	actions: {
		action: require("./actions/action.tpl"),
		channel_list: require("./actions/channel_list.tpl"),
		ctcp: require("./actions/ctcp.tpl"),
		invite: require("./actions/invite.tpl"),
		join: require("./actions/join.tpl"),
		kick: require("./actions/kick.tpl"),
		mode: require("./actions/mode.tpl"),
		nick: require("./actions/nick.tpl"),
		part: require("./actions/part.tpl"),
		quit: require("./actions/quit.tpl"),
		topic: require("./actions/topic.tpl"),
		topic_set_by: require("./actions/topic_set_by.tpl"),
	},

	chan: require("./chan.tpl"),
	chat: require("./chat.tpl"),
	contextmenu_divider: require("./contextmenu_divider.tpl"),
	contextmenu_item: require("./contextmenu_item.tpl"),
	msg: require("./msg.tpl"),
	msg_action: require("./msg_action.tpl"),
	msg_unhandled: require("./msg_unhandled.tpl"),
	network: require("./network.tpl"),
	toggle: require("./toggle.tpl"),
	unread_marker: require("./unread_marker.tpl"),
	user: require("./user.tpl"),
    query: require("./query.tpl"),
    query_infos: require("./query_infos.tpl"),
    msg_minor: require("./msg_minor.tpl"),
};
