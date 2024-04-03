import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from "date-fns";
import Streak from "../../assets/images/badges/streak.png";
import Trophy from "../../assets/images/badges/trophy.png";
import Medal from "../../assets/images/badges/medal.png";
import Goldstar from "../../assets/images/goldstar.png";

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    achievements: {
      // Simplified example for January (20 days)
      "2024-01-01": { stars: 2 },
      "2024-01-02": { stars: 1, badge: "streak" },
      "2024-01-04": { stars: 2 },
      "2024-01-06": { stars: 1 },
      "2024-01-08": { stars: 2, badge: "trophy" },
      "2024-01-10": { stars: 1 },
      "2024-01-12": { stars: 2 },
      "2024-01-14": { stars: 1, badge: "medal" },
      "2024-01-16": { stars: 2 },
      "2024-01-18": { stars: 1 },
      "2024-01-20": { stars: 2, badge: "streak" },
      "2024-01-22": { stars: 1 },
      "2024-01-24": { stars: 2 },
      "2024-01-26": { stars: 1, badge: "trophy" },
      "2024-01-28": { stars: 2 },
      "2024-01-30": { stars: 1 },
      //feb
      "2024-02-02": { stars: 1 },
      "2024-02-04": { stars: 2, badge: "medal" },
      "2024-02-06": { stars: 1 },
      "2024-02-08": { stars: 2 },
      "2024-02-10": { stars: 1, badge: "trophy" },
      "2024-02-12": { stars: 2 },
      "2024-02-14": { stars: 1 },
      "2024-02-16": { stars: 2, badge: "streak" },
      "2024-02-18": { stars: 1 },
      "2024-02-20": { stars: 2 },
      //march
      "2024-03-02": { stars: 1, badge: "trophy" },
      "2024-03-04": { stars: 2 },
      "2024-03-06": { stars: 1 },
      "2024-03-08": { stars: 2, badge: "medal" },
      "2024-03-10": { stars: 1 },
      "2024-03-12": { stars: 2 },
      "2024-03-14": { stars: 1, badge: "streak" },
      "2024-03-16": { stars: 2, badge: "streak" },
      "2024-03-18": { stars: 1, badge: "trophy" },
      "2024-03-20": { stars: 2 },
      //apr
      "2024-04-01": { stars: 2, badge: "trophy" },
      "2024-04-03": { stars: 1 },
    },
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";
    return (
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={this.prevMonth}>
          <Text style={styles.navText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthLabel}>
          {format(this.state.currentMonth, dateFormat)}
        </Text>
        <TouchableOpacity onPress={this.nextMonth}>
          <Text style={styles.navText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderDays() {
    const dateFormat = "eee";
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <View style={styles.dayColumn} key={i}>
          <Text style={styles.dayText}>
            {format(addDays(startDate, i), dateFormat)}
          </Text>
        </View>
      );
    }
    return <View style={styles.daysRow}>{days}</View>;
  }

  renderCells() {
    const { currentMonth, selectedDate, achievements } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    // Map badge identifiers to imported images
    const badgeImages = {
      streak: Streak,
      trophy: Trophy,
      medal: Medal,
    };

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDateKey = format(day, "yyyy-MM-dd");
        const dayAchievement = achievements[formattedDateKey];
        const stars = dayAchievement ? dayAchievement.stars : 0;
        const badge = dayAchievement ? badgeImages[dayAchievement.badge] : null;

        days.push(
          <TouchableOpacity
            style={[
              styles.cell,
              dayAchievement && dayAchievement.streak ? styles.streak : "",
            ]}
            key={day}
            onPress={() => this.onDateClick(day)}
          >
            <Text
              style={
                isSameDay(day, selectedDate)
                  ? styles.selectedDayText
                  : styles.dayText
              }
            >
              {isSameMonth(day, currentMonth) ? format(day, "d") : ""}
            </Text>
            <View style={styles.rewardsContainer}>
              {stars > 0 &&
                Array.from({ length: stars }).map((_, index) => (
                  <Image
                    key={index}
                    source={Goldstar}
                    style={styles.starIcon}
                  />
                ))}
              {badge && <Image source={badge} style={styles.badgeIcon} />}
            </View>
          </TouchableOpacity>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <View style={styles.weekRow} key={day}>
          {days}
        </View>
      );
      days = [];
    }
    return <View style={styles.cellsContainer}>{rows}</View>;
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#e8f7fc",
    margin: 15,
    borderRadius: 10,
    marginBottom: 100,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  monthLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006796",
  },
  navText: {
    fontSize: 18,
    color: "#006796",
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 5,
  },
  dayColumn: {
    margin: 5,
  },
  dayText: {
    fontSize: 16,
    color: "#5d6061",
    fontWeight: "bold",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cell: {
    margin: 5,
    height: 60,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d7f0f7",
    borderRadius: 8,
  },
  selectedDayText: {
    color: "white",
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  streak: {
    backgroundColor: "#cff4fc", // Light blue background for streak days
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
  },
  badgeIcon: {
    width: 15,
    height: 15,
  },
  rewardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
});

export default Calendar;
