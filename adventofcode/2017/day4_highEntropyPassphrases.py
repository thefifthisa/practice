def passphrases_noDuplicates(list):
    count = 0
    for pp in list:
        if len(set(pp.split())) == len(pp.split()): # sets have no duplicates
            count += 1
    return count

def passphrases_noAnagrams(list):
    count = 0
    for pp in list:
        if len(set([''.join(sorted(str)) for str in pp.split()])) == len(pp.split()): # sort each string in the passphrase first to undo anagrams
            count += 1
    return count

with open('day4_input.txt', 'r') as input:
    list = input.readlines()
    print(passphrases_noDuplicates(list))
    print(passphrases_noAnagrams(list))