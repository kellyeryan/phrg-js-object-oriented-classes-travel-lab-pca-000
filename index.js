class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation
  }

  avenueInd(name) {
    return eastWest.findIndex(avenue => avenue === name);
  }

  blocksTravelled() {
    let hd = Math.abs(this.avenueInd(this.beginningLocation.horizontal) - this.avenueInd(this.endingLocation.horizontal))
    let vd = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return hd + vd
  }


  estimatedTime(hours) {
    if (hours === true) {
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }
}

// Route

//horizontal - avenues;
//vertical - streets

// estimatedTime — Takes a boolean argument of peak uses the argument to calculate the estimated time. The method returns the number of minutes. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.
