cur_index = 0

def get_root():
    global cur_index
    root = pre_order[cur_index]
    cur_index += 1
    return root
    
def search_sub_tree(start, end):
    # print(start, end, in_order[start:end+1])
    root = get_root()
    try:
        root_index = in_order[start:end+1].index(root)
    except ValueError:
        print(root)

    search_sub_tree(start, root_index -1)
    search_sub_tree(root_index + 1, end)

    print(root)

for _ in range(int(input())):
    global pre_order, in_order, nodes
    
    nodes = int(input())
    pre_order = list(map(int,input().split()))
    in_order = list(map(int,input().split()))

    search_sub_tree(0, nodes-1)

