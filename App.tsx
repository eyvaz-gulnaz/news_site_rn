import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import News from './components/news';
import Logo from './components/logo';

interface Article {
  urlToImage: string,
  title: string,
  content: string,
  description: string,
  category: string
}


export default function App(): JSX.Element {
  const [newsData, setNewsData] = useState<Article[]>([])
  const [category, setCategory] = useState<string>("general")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/gb.json`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json; charset=utf-8'
          },
        })
        if (!response.ok) {
          throw new Error("No news data found")
        }
        const data: { articles: Article[] } = await response.json()
        setNewsData(data.articles)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [category])

  return (
    <ScrollView style={{ marginTop: 20 }}>

      <View style={styles.container}>
        <Logo source={{ uri: "https://img.milli.az/2018/10/27/698352.jpg" }} style={styles.logo} />
        <Header setCategory={setCategory} />
        <Text style={styles.lastNewsText}>Son xeberler</Text>
        {/* <View><Buttonlar> bura buttonlar elave et</Buttonlar></View> */}
        <View>
          {newsData.map((news, index) => (
            <News
              key={index}
              sekil={news.urlToImage}
              basliq={news.title}
              mezmun={news.description}
              xeber={news.content}
            />
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  logo: {
    width: '90%',
  },
  lastNewsText: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10
  }
});


