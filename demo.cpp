#include <iostream>
#include <vector>
using namespace std;

// implementationof th queck sort
int partician(vector<int> &a, int st, int end)
{
    int pivot = a[end]; // pick last element
    int i = st - 1;     // place for smaller elements

    for (int j = st; j < end; j++)
    {
        //this is a condition is resposible to do sorting in the asseding and dessending order  
        // below condition sort the elements in the decending order  if we do <= then that will sort the elements in the assending order
        if (a[j] >= pivot)
        {
            i++;
            swap(a[i], a[j]);
        }
    }
    swap(a[i + 1], a[end]);
    return i + 1;
}

void quickSort(vector<int> &a, int st, int end)
{

    if (st < end)
    {
        int pi = partician(a, st, end);
        quickSort(a, st, pi - 1);
        quickSort(a, pi + 1, end);
    }
}
int main()
{

    vector<int> a = {7, 6, 10, 5, 9, 2, 1, 15, 7};

    quickSort(a, 0, a.size() - 1);

    for (int i : a)
    {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}