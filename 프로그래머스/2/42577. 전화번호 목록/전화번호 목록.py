def solution(phone_book):
    hash = set(phone_book)
    
    for phone_number in phone_book:
        temp = ''
        for value in phone_number[:-1]:
            temp+=value
            if temp in hash:
                return False
    return True