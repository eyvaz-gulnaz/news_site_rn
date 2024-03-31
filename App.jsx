import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import News from './components/news';
import Logo from './components/logo';


export default function App() {
  return (
    <ScrollView style={{ marginTop: 20 }}>

      <View style={styles.container}>
        <Logo source={{ uri: "https://img.milli.az/2018/10/27/698352.jpg" }} style={styles.logo} />
        <Header />
        <Text style={styles.lastNewsText}>Son xeberler</Text>
        {/* <Row><Buttonlar></Buttonlar></Row> */}
        <View>
          <News basliq="Boy survives 100ft Grand Canyon fall after dodging tourist photo" sekil="https://ichef.bbci.co.uk/news/976/cpsprodpb/13951/production/_130790208_gettyimages-122316570.jpg.webp" xeber="A 13-year-old boy has survived after slipping and falling nearly 100ft (30m) at the Grand Canyon in the US state of Arizona. It took rescue crews two hours to pull Wyatt Kauffman to safety on Tuesday after falling off a ledge at the popular tourist site's North Rim. He was flown to hospital with serious injuries but has since been discharged. Wyatt told a local television station he had fallen while moving out of the way so people could take pictures." />
          <News basliq="Zuckerberg says Musk 'not serious' about cage fight" sekil="https://ichef.bbci.co.uk/news/976/cpsprodpb/10BD8/production/_130786586_9df9afef0d33c6ba11146f7ed22c84418f1e60161_0_1598_8991000x563.jpg.webp" xeber="Elon Musk isn't serious about holding a cage fight and it's time to move on, Mark Zuckerberg has said.
                In a post on his social media site Threads, the Meta boss said he had offered Mr Musk a real date but the rival entrepreneur had made excuses.Mr Musk had earlier on Sunday suggested on his own messaging site X, formerly known as Twitter, that he was willing to fight as early as Monday."></News>
          <News basliq="Ecuador: Thousands of soldiers move gang leader Fito" sekil="https://ichef.bbci.co.uk/news/976/cpsprodpb/13951/production/_130790208_gettyimages-122316570.jpg.webp" xeber="Thousands of Ecuadorian soldiers and police have been involved in a dawn operation to move a notorious gang leader to a maximum security jail. Jose Adolfo Macias, known as Fito is accused of sending death threats to Ecuador's murdered presidential candidate, Fernando Villavicencio. The anti-corruption campaigner was shot three times in the head leaving a campaign rally on Wednesday. Before his murder Mr Villavicencio said he had been threatened by Fito."></News>
          <News basliq="Iran attack: Shiraz shrine shooting leaves at least one dead" sekil="https://ichef.bbci.co.uk/news/976/cpsprodpb/CCAE/production/_130789325_2b56ed246d5eb8d3de2742b32484391a248fa38b.jpg.webp" xeber="One person was killed and eight wounded in a terrorist attack at a Shia Muslim shrine in the Iranian city of Shiraz on Sunday, state media reported. The official Irna news agency said a gunman attempted to enter the Shah Cheragh mausoleum and opened fire on visitors before he could be subdued. In October, 13 people were killed in an attack on Shah Cheragh that was claimed by the Islamic State (IS) group. No group immediately claimed the latest attack. State media originally reported that two attackers were involved and that four people were killed, but later said there was a lone attacker and that one person was killed."></News>
          <News basliq="New Zealand's youth vaping crisis clouds smoke-free future" sekil="https://ichef.bbci.co.uk/news/976/cpsprodpb/6661/production/_130790262_screenshot2023-08-11at8.59.49am.png.webp" xeber="It got more accessible for me, so I got addicted. Everyone around me was vaping at the time. Coco, whose name has been changed to protect her identity, was 12 when she vaped for the first time. She's now 15 and trying to quit. She was angry, she said, as she smiled at her mother sitting nearby. My phone was taken away from me. Coco had never brought the vapes home, but as she grew more used to the habit, she also wanted to vape after school. What attracted me to it was more the flavours like 'Peach ice' or 'Lychee-grape'. You can find vapes inspired by video games, they come in bright colours and flavours like bubble gum and candy floss, she said"></News>
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


