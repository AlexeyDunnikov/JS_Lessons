function nbYear(startPopulation, percent, inhabitants, neededPopulation) {
    let neededYears = 0;

    while (startPopulation < neededPopulation){
        startPopulation += Math.floor(
          startPopulation * (percent / 100) + inhabitants
        );
        neededYears++;
    }

    return neededYears;
}
