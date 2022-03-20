import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import { useSharedValue } from 'react-native-reanimated';
import { LineChart } from 'react-native-wagmi-charts';
import CoinTitle from './CoinTitle';
import AppText from './Text';



const { width: SIZE } = Dimensions.get('window');


const CoinChart = ({ color, currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {
  console.log("HIT!")
  const latestCurrentPrice = useSharedValue(currentPrice);
  const [chartReady, setChartReady] = useState(false);

  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  useEffect(() => {
    latestCurrentPrice.value = currentPrice;

    setTimeout(() => {
      setChartReady(true);
    }, 0)

  }, [currentPrice])

  const formatUSD = value => {
    'worklet';
    if (value === '') {
      const formattedValue = `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`
      return formattedValue;
    }

    const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    return formattedValue;
  };

  if (sparkline.length === 0) {
    return <Text>Loading...</Text>
  }

  let formattedPrice:string = formatUSD('');

  return (
    <View style={styles.chartWrapper}>

      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <CoinTitle logoUrl={logoUrl} name={name} ticker={symbol}></CoinTitle>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          {/* <AppText
            format={formatUSD}
            style={styles.boldTitle}
          /> */}
          <AppText style={styles.boldTitle}>{formattedPrice}</AppText>
          <Text style={[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>

      <LineChart.Provider data={sparkline}>
      <LineChart>
        <LineChart.Path color={priceChangeColor}/>
        <LineChart.CursorCrosshair>
          <LineChart.Tooltip />
          <LineChart.Gradient color={color} />
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>   
      
    </View>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16
  },
  titlesWrapper: {
    // marginHorizontal: 16
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});

export default CoinChart