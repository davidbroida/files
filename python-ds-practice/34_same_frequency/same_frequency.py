def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    return frequency_counter2(str(num1)) == frequency_counter2(str(num2))

# def frequency_counter(number):
#     counts = {}

#     for x in number:
#         counts[x] =  counts.get(x , 0) + 1

#     return counts

def frequency_counter2(number):
    return {x: number.count(x) for x in number}

