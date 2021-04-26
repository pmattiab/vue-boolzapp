// Vue Js
var app = new Vue(
    {
        // elemento root in HTML su cui operare
        el: "#root",

        // elementi data di Vue Js
        data: {

            // mio contatto
            myContact: {
                name: 'Mattia',
                avatar: '_io',
            },
            // sezione notifiche
            notify: false,

            // filtro ricerca contatti
            userFilter: "",

            // nuovo messaggio utente
            newUserMsg: "",

            // chat aperta
            currentChat: 0,

            // array di oggetti, ogni oggetto = contatto
            // ogni contatto contiene un array di messaggi come oggetti
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    toRead: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            menuShow: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            menuShow: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    toRead: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: '_5',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Roberta',
                    avatar: '_6',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            menuShow: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Antonio',
                    avatar: '_7',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            menuShow: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                },
                {
                    name: 'Pasquale',
                    avatar: '_8',
                    visible: true,
                    toRead: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            menuShow: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            menuShow: false
                        }
                    ],
                }
            ]
        },

        // funzioni
        methods: {

            // funzione per filtrare i contatti
            contactFilter () {
                this.contacts.forEach((element) => {
                    const contactName = element.name.toLowerCase();
                    if (contactName.includes(this.userFilter.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },

            // funzione per aprire la singola chat
            changeChat(contact, index) {
                this.currentChat = index;
                contact.toRead = false;  
            },

            // funzione per mandare messaggio utente con riposta "Ok"
            sendMsg(currentChat) {
                const arrayMsgs = this.contacts[currentChat].messages;
                if (this.newUserMsg.length > 0) {
                    arrayMsgs.push({
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.newUserMsg,
                        status: 'sent',
                        menuShow: false
                    });
                    this.newUserMsg = "";

                    // riposta automatica "Ok"
                    setTimeout(() => {
                        arrayMsgs.push({
                            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                            text: 'Ok',
                            status: 'received',
                            menuShow: false
                        });
                    }, 2000);
                } else {
                    alert("Messaggio vuoto");
                }
            },

            // funzione per ricavare l'ultimo indice dell'array messaggi
            lastMsgIndex(contact) {
                let indexNumber = contact.messages.length;
                return indexNumber - 1;
            },

            // funzione per mostrare e nascondere il menu messaggio
            dropDownShow(message) {
                message.menuShow = !message.menuShow;
            },

            // funzione per cancellare il singolo messaggio
            deleteMsg(index) {
                this.contacts[this.currentChat].messages.splice(index, 1);
            },

            // funzione per far comparire l'alert con le info del messaggio
            infoMsg(message) {
                alert(`
                Testo messaggio: ${message.text}
                Data messaggio: ${message.date}`);
                message.menuShow = false;
            },

            // funzione per nascondere la sezione notifiche
            notifyOn() {
                this.notify = true;
            }
        },

        // funzione da far partire al caricamento della pagina
        created() {}
    }
);