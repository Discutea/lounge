var trans = {
    you:                         'you',
    to:                          'to',
    on:                          'on',
    action_join:                 'has joined the channel',
    action_channel_list_channel: 'Channel',
    action_channel_list_users:   'Users',
    action_channel_list_topic:   'Topic',
    action_invite_invited:       'invited',
    action_kick:                 'has kicked',
    action_mode:                 'sets mode',
    action_nick:                 'is now known as',
    action_part:                 'has left the channel',
    action_quit:                 'has quit',
    action_topic:                'has changed the topic to:',
    action_topic_is:             'The topic is:',
    action_topic_set_by:         'Topic set by',
    action_whois_logged:         'is logged in as',
    action_whois_follow_chans:   'Channels:',
    action_whois_connected:      'is connected to',
    action_whois_secure:         'is using a secure connection',
    action_whois_away:           'Away',
    action_whois_idle:           'has been idle since',
    male:                        'Male',
    female:                      'Female',
    years_old:                   'Years old',
    admin:                       'Administrator',
    helper:                      'Helper',
    vip:                         'V.I.P',
    tool_admin:                  'Administrateur sur discutea',
    tool_helper:                 'Apte a l\'aide',
    tool_vip:                    'Inscrit sous', // ex: inscrit sous strategy
    warning:                     'Warning',
    minor_msg:                   'Vous parlez a <strong>un(e) mineur(e)</strong> cette conversation est donc placée sous surveillance.<br /> \
                                  Si notre système de detection juge que la conversation n\'est pas adaptée a l\'age de notre utilisateur:<br /> \
                                  1) Vous encourez le risque d\'être exclu de notre réseau.<br /> \
                                  2) Vous encourez le risque que nous declarions votre adresse ip aux autorités françaises.<br />',
    minor_undefined_msg:          'La personne avec qui vous parlez ne nous a pas informé son age.<br /> \
                                   <strong>Cette personne est peut etre mineur</strong> merci de tenir des propos corrects et à caractère non sexuel.',   
    web: {
        connectTo:    'Connect to',
        title:        'Self-hosted web IRC client Forked to TheLounge',
        notconnected: 'You\'re not connected yet.',
        loading:      'Discutea IRC client is loading…',
        loadingapp:   'Loading the app…',
        jsenabled:    'Make sure to have JavaScript enabled.',
        connectlost:  'Client connection lost &mdash; Click here to reconnect',
        connect:      'Connect',
        warning:      'Warning',
        form: {
            nick:   'Nick',
            age:    'Age',
            gender: 'Gender',
        },
        settings: {
            settings:     'Settings',
            messages:     'Messages',
            showjoins:    'Show joins',
            showmotd:     'Show <abbr title="Message Of The Day">MOTD</abbr>',
            showparts:    'Show parts',
			shownick:     'Show nick changes',
			showmode:     'Show mode',
			showquits:    'Show quits',
            antiprivate:  'Anti messages privates',
            registeredmp: 'No receiving private messages.',
            nomp:         'Receive messages by registered members.',
            visualaids:   'Visual Aids',
            colornick:    'Enable colored nicknames',
            linkandurl:   'Links and URLs',
            thumbnails:   'Auto-expand thumbnails',
            links:        'Auto-expand links',
            notifs:       'Notifications',
            notifdesktop: 'Enable desktop notifications',
            notsupported: 'Desktop notifications are blocked or not supported by your browser.',
            notisound:    'Enable notification sound',
            playsound:    'Play sound',
            notifisall:   'Enable notification for all messages'
        }
    }
};

module.exports = trans;