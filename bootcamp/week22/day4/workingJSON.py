import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Access the nested "salary" key
data = json.loads(sampleJson)
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Add a key called "birth_date"
data["company"]["employee"]["birth_date"] = "1990-01-01"

# Save the dictionary as JSON to a file
with open("output.json", "w") as outfile:
    json.dump(data, outfile)
