import React,{useState} from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface journey_t{
    airlines:string,
    flightNumber:string,
    seatNo:string,
    fromAirport:string,
    fromTerminal:string,
    fromGate:string,
    destAirport:string,
    destTerminal:string,
    destGate:string,
    destBaggage:string,
    departureDateTime:string,
    arrivalDateTime:string,
    status:string,
    lastUpdated:string,
    duration:string
}


const HomePage = () => {
    const [journeys,setJourneys]=useState<journey_t[]>([
        {
            fromAirport: 'MAA',
            destAirport: 'SIN',
            departureDateTime: new Date().toISOString(),
            arrivalDateTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
            status: '',
            fromTerminal: '2A',
            fromGate: '16',
            destTerminal: '3',
            destGate: '1',
            airlines: 'Singapore Airlines',
            flightNumber: 'SQ 529',
            seatNo: '13D',
            lastUpdated:new Date().toISOString(),
            duration:'4h 30mins',
            destBaggage:'2'
        },
        {
          fromAirport: 'MAA',
          destAirport: 'SIN',
          departureDateTime: new Date().toISOString(),
          arrivalDateTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
          status: '',
          fromTerminal: '2A',
          fromGate: '16',
          destTerminal: '3',
          destGate: '1',
          airlines: 'Singapore Airlines',
          flightNumber: 'SQ 529',
          seatNo: '13D',
          lastUpdated:new Date().toISOString(),
          duration:'4h 30mins',
          destBaggage:'2'
      }
    ])
    const image="./assets/images/emirates.png"
  const renderJourney = ({ item }) => (
    <TouchableOpacity onLongPress={}>
    <View style={[styles.journeyItem,styles.boxWithShadow]}>
      <View>
        <Text>{item.airlines}-{item.flightNumber}</Text>
      </View>
        <View style={styles.firstSection}>
            <View style={styles.firstSectionFrom}>
                <Text style={styles.fontSize32}>{item.fromAirport}</Text>
            </View>
            <View style={styles.firstSectionMiddle}>
                <Text style={styles.text}>{item.duration}</Text>
                <View style={styles.underScore}></View>
            </View>
            <View style={styles.firstSectionTo}>
                <Text style={styles.fontSize32}>{item.destAirport}</Text>
            </View>
        </View>
        <View style={styles.secondSection}>
            <View style={styles.secondSectionLeft}>
                <Text style={styles.text}>{item.departureDateTime}</Text>
                <View style={styles.innerBox}>
                    <View>
                        <Text style={[styles.width120,styles.fontSize14]}>Terminal</Text>
                        <Text style={styles.fontSize24}>{item.fromTerminal}</Text>
                    </View>
                    <View>
                        <Text style={styles.fontSize14}>Gate</Text>
                        <Text style={styles.fontSize24}>{item.fromGate}</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.secondSectionRight}>
                <Text style={styles.text}>{item.arrivalDateTime}</Text>
                <View style={styles.innerBox}>
                    <View>
                        <Text style={[styles.width120,styles.fontSize14]}>Terminal</Text>
                        <Text style={styles.fontSize24}>{item.destTerminal}</Text>
                    </View>
                    <View>
                        <Text style={styles.fontSize14}>Baggage</Text>
                        <Text style={styles.fontSize24}>{item.destBaggage}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={[styles.container]}>
      {journeys.length === 0 ? (
        <Text style={styles.noJourneysText}>No upcoming journeys found.</Text>
      ) : (
        <FlatList
          data={journeys}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderJourney}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        
      >
        <Text style={styles.addButtonText}>Add New Journey</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  underScore:{
    flex:100,
    backgroundColor:'#dadce0',
    height:2
  },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    innerBox:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    fontSize16:{
        fontSize:16
    },
    fontSize32:{
        fontSize:32
    },
    fontSize14:{
        fontSize:14
    },
    fontSize24:{
        fontSize:24
    },
  width120:{
    width:75
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6e6e6',
  },
  boxWithShadow: {
    borderRadius:6,
    shadowColor: '#005',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5
 },
  journeyItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    
  },
  firstSection:{
    paddingTop: 20,
    flexDirection:'row'
  },
  firstSectionFrom:{
    alignItems:'flex-start',
    flexDirection:'column'
  },
  firstSectionMiddle:{
    alignItems:'center',
    flexGrow:1
  },
  firstSectionTo:{
    alignItems:'flex-end',
    flexDirection:'column'
  },
  secondSection:{
    flexDirection:'row'
  },
  secondSectionLeft:{
    paddingTop:20,
    alignItems:'flex-start',
    flexDirection:'column',
    flex:1,
    borderRightWidth:1
  },
  secondSectionmiddle:{
    marginTop:204,
    flex:1,
  },
  secondSectionRight:{
    paddingTop:20,
    marginLeft:10,
    alignItems:'flex-start',
    flexDirection:'column',
    flex:1,
  },

  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  noJourneysText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 16,
    color: '#888',
  },
  addButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;