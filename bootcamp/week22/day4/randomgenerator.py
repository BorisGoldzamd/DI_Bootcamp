import random

def get_words_from_file(filename):
    with open(filename, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(length, words):
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words)
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program will generate a random sentence based on the provided word list.")

    # Get words from file
    filename = "word_list.txt"
    words = get_words_from_file(filename)

    # Ask user for sentence length
    while True:
        try:
            length = int(input("How long do you want the sentence to be (between 2 and 20 words)? "))
            if 2 <= length <= 20:
                break
            else:
                print("Please enter a number between 2 and 20.")
        except ValueError:
            print("Please enter a valid integer.")

    # Generate and print the random sentence
    sentence = get_random_sentence(length, words)
    print("Random Sentence:", sentence)

if __name__ == "__main__":
    main()