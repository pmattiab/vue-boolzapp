// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {

            myContact: {
                name: 'Mattia',
                avatar: '_io',
            },

            userFilter: "",

            newUserMsg: "",

            currentChat: 0,

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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }
            ]
            

        },

        // methods (funzioni)
        methods: {

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

            changeChat(contact, index) {

                this.currentChat = index;
                                
                contact.toRead = false;
                
            },

            sendMsg(currentChat) {

                const arrayMsgs = this.contacts[currentChat].messages;

                if (this.newUserMsg.length > 0) {

                    arrayMsgs.push({

                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: this.newUserMsg,
                        status: 'sent'
                        
                    });

                    this.newUserMsg = "";

                    setTimeout(() => {

                        arrayMsgs.push({

                            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                            text: 'Ok',
                            status: 'received'

                        });

                      }, 2000);

                } else {

                    alert("Messaggio vuoto");

                }
            },

            lastMsgIndex(contact) {

                let indexNumber = contact.messages.length;

                return indexNumber - 1;
            },

            dropDownShow() {
                alert("test");
            }
        },

        // funzioni da far partire al caricamento della pagina
        created() {}
    }
);