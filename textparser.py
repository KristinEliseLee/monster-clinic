import csv
import json

text_files = ['./character_data/bandit.csv']

text = text_files[0]
character_dict = {}
characters = []

for text in text_files:
    character_dict = {}
    characters.append(character_dict)

    with open(text) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0

        name = csv_reader.__next__()[1]
        character_dict["name"] = name
        current_dict = character_dict
        current_dict['image'] = csv_reader.__next__()[1]
        current_dict['inspections'] = {
            'children': [],
        }
        current_dict = current_dict['inspections']
        parent_dict = current_dict
        dict_stack = []

        for row in csv_reader:
            answer = row[-1]
            points = [x.lower() for x in row[-2].split(" ")]
            for i in range(len(row)-3, 0, -1):
                if row[i]:
                    q_index = i
                    break

            q = row[q_index]
            q_dict = {
                'name':q,
                'results': answer,
                'completed':False,
                'points':points
                 }
            current_dict = parent_dict
            row = row[1:q_index]
            for i in range(len(row)):
                category = row[i]
                if category:
                    new_dict = {
                    'name': category,
                    'completed': False,
                    'expanded':False,
                    'children': []
                    }
                    current_dict['children'].append(new_dict)
                    current_dict = new_dict
                    if len(dict_stack) > i+1 :
                        dict_stack[i] = current_dict
                        dict_stack = dict_stack[:i+1]
                    else:
                        dict_stack.append(current_dict)

                else:
                    current_dict = dict_stack[i]

            current_dict['children'].append(q_dict)

        character_dict['inspections'] = character_dict['inspections']['children']

characterinfo = json.dumps(characters)


file = open('CharacterInfo.js', 'w+')
file.write('const CharacterInfo = '+ characterinfo)
file.write('\nexport default CharacterInfo')
file.write('\n')
file.close()
