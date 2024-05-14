import re
import string
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        return words.count(word)

    def most_common_word(self):
        words = re.findall(r'\w+', self.text.lower())
        word_counts = Counter(words)
        return max(word_counts, key=word_counts.get)

    def unique_words(self):
        words = re.findall(r'\w+', self.text.lower())
        return set(words)

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)

class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_stop_words(self):
        stop_words = {'a', 'an', 'the', 'in', 'on', 'at', 'to', 'of', 'for', 'with', 'by', 'about'}
        words = re.findall(r'\w+', self.text.lower())
        return ' '.join(word for word in words if word not in stop_words)

    def remove_special_characters(self):
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)

# Part I - Analyzing a simple string
simple_text = "A good book would sometimes cost as much as a good house."
text_obj = Text(simple_text)
print("Frequency of 'good':", text_obj.word_frequency('good'))
print("Most common word:", text_obj.most_common_word())
print("Unique words:", text_obj.unique_words())

# Part II - Analyzing text from an external file
text_from_file = Text.from_file('the_stranger.txt')
print("Frequency of 'meursault':", text_from_file.word_frequency('meursault'))
print("Most common word:", text_from_file.most_common_word())
print("Unique words:", text_from_file.unique_words())

# Bonus - TextModification
modified_text = TextModification(simple_text)
print("Text without punctuation:", modified_text.remove_punctuation())
print("Text without stop words:", modified_text.remove_stop_words())
print("Text without special characters:", modified_text.remove_special_characters())
