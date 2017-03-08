var trans = {
    you:                         'vous',
    to:                          'à',
    on:                          'sur',
    action_join:                 'a rejoint le salon',
    action_channel_list_channel: 'Salon',
    action_channel_list_users:   'Utilisateurs',
    action_channel_list_topic:   'Sujet',
    action_invite_invited:       'invité',
    action_kick:                 'a éjecté',
    action_mode:                 'mode',
    action_nick:                 'change de pseudo en',
    action_part:                 'sort du salon',
    action_quit:                 'a quitté',
    action_topic:                'a changé le sujet en :',
    action_topic_is:             'Le sujet est :',
    action_topic_set_by:         'Sujet défini par',
    action_whois_logged:         'est enregistré sous',
    action_whois_follow_chans:   'Salons :',
    action_whois_connected:      'est connecté à',
    action_whois_secure:         'utilise une connexion sécurisée',
    action_whois_away:           'Absent',
    action_whois_idle:           'est inactif depuis le',
    male:                        'Homme',
    female:                      'Femme',
    years_old:                   'Ans',
    admin:                       'Administrateur',
    helper:                      'Helpeur',
    vip:                         'V.I.P',
    tool_admin:                  'Administrateur sur Discutea',
    tool_helper:                 'Apte à l\'aide',
    tool_vip:                    'Inscrit sous', // ex: inscrit sous strategy
    warning:                     'Attention',
    minor_msg:                   'Vous êtes sur le point de communiquer avec <strong>un(e) mineur(e)</strong> cette conversation est donc placée sous surveillance.<br /> \
                                  Si notre système de détection juge que la conversation n\'est pas adaptée a l\'âge de notre utilisateur :<br /> \
                                  - Vous encourez le risque d\'être exclu de notre réseau.<br /> \
                                  - Votre activité sera déclarée aux autorités compétentes.<br />',
    minor_undefined_msg:          'La personne à qui vous vous adressez ne nous a pas communiqué son âge.<br /> \
                                   <strong>Cette personne est peut-être mineure</strong> merci de rester correct. Tout comportement inapproprié donnera lieu à des sanctions lourdes.',   
    web: {
        connectTo:    'Connexion à',
        title:        'Client IRC auto-hébergé pour le web branche de Lounge',
        notconnected: 'Vous n\'êtes pas encore connecté.',
        loading:      'Le client IRC de Discutea se charge...',
        loadingapp:   'Chargement de l\'application...',
        jsenabled:    'Assurez-vous que JavaScript est activé.',
        connectlost:  'Connexion perdue &mdash; Cliquez ici pour vous reconnecter',
        connect:      'Connexion',
        warning:      'Attention',
        form: {
            nick:   'Pseudo',
            age:    'Age',
            gender: 'Sexe',
        },
        settings: {
            settings:     'Préférences',
            messages:     'Messages',
            showjoins:    'Voir les entrées',
            showmotd:     'Voir le <abbr title="Message du jour">MOTD</abbr>',
            showparts:    'Voir les départs',
			shownick:     'Voir les pseudos',
			showmode:     'Voir les modes',
			showquits:    'Voir les déconnexions' ,
            antiprivate:  'Anti messages privés',
            registeredmp: 'Ne plus recevoir de messages privés.',
            nomp:         'Recevoir des messages que de la part des membres inscrits',
            visualaids:   'Aides visuelles',
            colornick:    'Activer la coloration des pseudos',
            linkandurl:   'Liens et URLs',
            thumbnails:   'Affichage automatique des vignettes',
            links:        'Extension automatique des liens',
            notifs:       'Notifications',
            notifdesktop: 'Notifications de bureau',
            notsupported: 'Les notifications de bureau sont bloquées ou non supprimées par votre navigateur.',
            notisound:    'Jouer un son pour m\'informer',
            playsound:    'Ecouter le son',
            notifisall:   'Activer les notifications pour tout les messages'
        }
    }
};

module.exports = trans;
