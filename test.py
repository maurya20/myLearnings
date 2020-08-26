import json
# JSON file 
f = open ('data.json', "r") 
  
# Reading from file 
data = json.loads(f.read()) 
  
# Iterating through the json 
# list 
for i in data['Employees']: 
    print(i) 
  
# Closing file 
f.close() 
