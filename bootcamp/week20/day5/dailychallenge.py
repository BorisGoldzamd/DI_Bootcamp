#challenge1
list = ['without','hello','bag','world']
list.sort()
print(list)

#challenge2

def longestWord(frase):
    words = frase.split()  # Split the sentence into words
    word_len = ''
    for word in words:
        if len(word) > len(word_len):
            word_len = word
    return word_len

frase = "Margaret's toy is a pretty doll."

print(longestWord(frase))
