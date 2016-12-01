function mutation(arr) {
    var firstString = arr[0].toLowerCase();
    var secondString = arr[1].toLowerCase();
    for (var i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}
mutation(["hello", "hey"]);