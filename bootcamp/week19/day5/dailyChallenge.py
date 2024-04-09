def create_index_dict(word):
    index_dict = {}
    for idx, letter in enumerate(word):
        if letter not in index_dict:
            index_dict[letter] = [idx]
        else:
            index_dict[letter].append(idx)
    return index_dict

word = input("Enter a word: ")
result = create_index_dict(word)
print(result)


#exc2

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

def items_affordable(items_purchase, wallet):
    affordable_items = []
    for item, price in items_purchase.items():
        price = int(price.replace("$", "").replace(",", ""))
        if price <= wallet:
            affordable_items.append({"item": item, "price": price})
    return affordable_items


items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet = 50
affordable_items = items_affordable(items_purchase, wallet)
print("Affordable items:", affordable_items)
