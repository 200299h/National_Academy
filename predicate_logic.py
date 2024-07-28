from itertools import product

def evaluate_expression(expression, variables, values):
    env = dict(zip(variables, values))
    return eval(expression, {}, env)

def generate_truth_table(expression, variables):
    num_vars = len(variables)
    truth_table = []

    for values in product([False, True], repeat=num_vars):
        result = evaluate_expression(expression, variables, values)
        truth_table.append((*values, result))

    return truth_table

def print_truth_table(truth_table, variables):
    headers = variables + ['Result']
    print("\t".join(headers))
    print("-" * (len(headers) * 8))

    for row in truth_table:
        print("\t".join(map(str, row)))

def main():
    expression = input("Enter the logical expression (use 'and', 'or', 'not'): ")
    variables = input("Enter the variables in the expression separated by spaces: ").split()

    truth_table = generate_truth_table(expression, variables)
    print_truth_table(truth_table, variables)

if __name__ == "__main__":
    main()
