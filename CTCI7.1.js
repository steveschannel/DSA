//Deck of Cards: Design the data structures for a generic deck of cards. 
//Explain how you would subclass the data structures to implement blackjack.

function Cardgame(selection) {

    class Card {
        //node  -> data
        constructor(value, suite) {
            this.data = [value, suite]
            this.tail = null
        }
    }

    class Deck {
        //linked list -> references
        constructor(card = null) {
            this.head = card
            this.size = 0
        }

        newCard(card) {
            //need pointer in functions to traverse linked list
            let pointer

            if (this.head === null) {
                this.head = card
                this.size = +1
            }

            else {
                pointer = this.head

                while (pointer.tail !== null) {
                    pointer = pointer.tail
                }

                if (pointer.tail === null) {
                    this.size += 1
                    pointer.tail = card
                }
            }
        }

        getRandomCard() {
            let pointer
            let deckDepth
            let cardToPick

            if (this.head === null) {
                return
            }
            else {
                pointer = this.head
                deckDepth = 0
                cardToPick = Math.floor(Math.random() * this.size)

                while (deckDepth !== cardToPick) {
                    pointer = pointer.tail
                    deckDepth += 1
                }

                console.log(pointer)

            }
        }

        shuffle() {
            let pointer
            let deckDepth
            let lastCard
            let cardToSwap

            if (this.head === null) {
                return
            }
            else {
                let count = 1

                while (count !== this.size) {
                    pointer = this.head

                    deckDepth = 0
                    cardToSwap = Math.floor(Math.random() * this.size)

                    //not first card in linked list
                    if (cardToSwap !== 0) {
                        //deckdepth - how many times ive traversed
                        while (deckDepth !== cardToSwap) {

                            lastCard = pointer
                            //traversal of the linked list
                            pointer = pointer.tail
                            deckDepth += 1
                        }

                        if (deckDepth === cardToSwap) {
                            this.size -= 1
                            lastCard.tail = pointer.tail
                            pointer.tail = null
                            this.newCard(pointer)
                        }
                    }
                    //in the case it was in fact the first node in the linked list
                    else {
                        this.size -= 1
                        this.head = pointer.tail
                        pointer.tail = null
                        this.newCard(pointer)
                    }

                    count += 1
                }
            }

        }

        listCards() {
            let pointer
            let val = 0

            if (this.head === null) {
                return
            }

            else {
                pointer = this.head

                while (pointer.tail !== null) {
                    val += 1
                    console.log('card#, card', val, pointer)
                    pointer = pointer.tail
                }
                if (pointer.tail == null) {
                    val += 1
                    console.log('val, the end card', val, pointer)
                }
            }
        }
    }

    function Deck52() {
        const suites = ['hearts', 'clubs', 'diamonds', 'spades']
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        const deck = new Deck()

        for (const suite of suites) {
            for (const value of values) {
                deck.newCard(new Card(value, suite))
            }
        }

        return deck
    }

    switch (selection) {
        case 1:
            BlackJack(Deck52())

            function BlackJack(deck) {

                deck.shuffle()
                // deck.listCards()
                // console.log(deck.size)
                deck.getRandomCard()

            }
            break

        case 2:
            return 'Poker'
            break
    }
}

Cardgame(1)