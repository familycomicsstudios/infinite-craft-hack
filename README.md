# infinite-craft-hack
A bookmarklet hack for infinite craft.
[Add Item][javascript:(function()%7Blet initial %3D localStorage.getItem("infinite-craft-data")%3B%0Alet array %3D JSON.parse(initial).elements%0Alet text %3D prompt("What is the name of the item%3F")%3B%0Alet emoji %3D prompt("What should the emoji be for the item%3F Hint%3A Press Windows %2B . ")%3B%0Alet discovered %3D confirm("Should the item be a first discovery%3F")%3B%0Alet ItemsToAdd %3D %7B%0A  text%3A text%2C%0A  emoji%3A emoji%2C%0A  discovered%3A discovered%0A%7D%3B%0Aarray.push(ItemsToAdd)%0Alet newItem %3D %7B%0A%09elements%3A array%0A%7D%3B%0A%0Aarray %3D JSON.stringify(newItem)%0AlocalStorage.setItem("infinite-craft-data"%2C array)%3B%0Aalert("Reloading!")%0Awindow.location.reload()%3B%7D)()%3B]
