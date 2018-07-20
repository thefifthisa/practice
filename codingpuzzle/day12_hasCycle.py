# https://twitter.com/ASpittel/status/1020297461724794881

def has_cycle(head):
    curr = head
    visited = []
    while curr.next:
        if curr.next in visited:
            return True
        else:
            visited.append(curr)
            curr = curr.next
    return False