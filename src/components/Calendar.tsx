import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type CalendarProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
};

export const Calendar = ({ selectedDate, onSelectDate }: CalendarProps) => {
  const getMonthName = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
  };

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: Date[] = [];
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const buildCalendarGrid = (days: Date[]): (Date | null)[][] => {
    const firstDayIndex = days[0].getDay();
    const lastDayIndex = days[days.length - 1].getDay();

    const leadingEmptyCells = Array.from({ length: firstDayIndex }, () => null);

    const trailingEmptyCells = Array.from({ length: 6 - lastDayIndex }, () => null);

    const fullGrid = [...leadingEmptyCells, ...days, ...trailingEmptyCells];

    const weeks: (Date | null)[][] = [];
    for (let i = 0; i < fullGrid.length; i += 7) {
      weeks.push(fullGrid.slice(i, i + 7));
    }

    return weeks;
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() - 1);
    onSelectDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + 1);
    onSelectDate(newDate);
  };

  const selectDay = (day: Date) => {
    onSelectDate(day);
  };

  const days = getDaysInMonth(selectedDate);
  const calendarGrid = buildCalendarGrid(days);
  const currentDay = selectedDate.getDate();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton}>
          <Icon name="chevron-left" size={20} color="#666" />
        </TouchableOpacity>
        <Text style={styles.monthTitle}>{getMonthName(selectedDate)}</Text>
        <TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
          <Icon name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.weekDaysContainer}>
        {weekDays.map((day) => (
          <View key={day} style={styles.weekDayCell}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {calendarGrid.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                style={[
                  styles.dayCell,
                  day && day.getDate() === currentDay ? styles.selectedDayCell : null,
                  day && day.toDateString() === new Date().toDateString() ? styles.todayCell : null,
                ]}
                onPress={() => day && selectDay(day)}
                disabled={!day}
              >
                <Text
                  style={[
                    styles.dayText,
                    day && day.getDate() === currentDay ? styles.selectedDayText : null,
                    day && day.toDateString() === new Date().toDateString() ? styles.todayText : null,
                  ]}
                >
                  {day ? day.getDate() : ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  navButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDayCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  daysGrid: {
    flexDirection: 'column',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  selectedDayCell: {
    backgroundColor: '#9b87f5',
    borderRadius: 15,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCell: {
    backgroundColor: '#f2eeff',
    borderRadius: 15,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
  selectedDayText: {
    color: 'white',
    fontWeight: '500',
  },
  todayText: {
    color: '#9b87f5',
    fontWeight: '500',
  },
});