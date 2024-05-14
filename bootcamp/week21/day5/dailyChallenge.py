import random

class Deck:
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = []

        # Create a deck of cards
        for suit in self.suits:
            for value in self.values:
                self.cards.append((suit, value))

    def shuffle(self):
        # Shuffle the deck of cards
        random.shuffle(self.cards)

    def deal(self):
        # Deal a single card from the deck
        if len(self.cards) == 0:
            print("The deck is empty. Cannot deal any more cards.")
            return None
        else:
            return self.cards.pop()

# Example usage:
deck = Deck()
deck.shuffle()

# Deal and print a single card
card = deck.deal()
print("Dealt card:", card)
