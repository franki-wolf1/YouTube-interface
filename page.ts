import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonChip,
} from '@ionic/react';
import { micOutline, videocamOutline, appsOutline, notificationsOutline, personCircleOutline } from 'ionicons/icons';

const categories = ['Todos', 'Mixes', 'Música', 'Videojuegos', 'En tiempo real', 'Noticias', 'Ruido blanco'];

const videos = [
  { title: 'Vevo', subtitle: 'Mix: Imagine Dragons - Natural', thumbnail: '/placeholder.svg?height=200&width=300' },
  { title: 'Mix: roberto tati y Dominica di Salvo tu me amas con letra', subtitle: 'Leonardo Favio, Daniela & José Luis Rodriguez y muchos más', thumbnail: '/placeholder.svg?height=200&width=300' },
  { title: 'Ibiza Summer Mix 2024 🌊 Best Of Tropical Deep House Music Chill Out Mix', subtitle: 'Magic Club', thumbnail: '/placeholder.svg?height=200&width=300' },
  { title: 'Programa Chespírito - 48 (1981)', subtitle: 'FUCHiTube', thumbnail: '/placeholder.svg?height=200&width=300' },
  { title: 'No estudies programación, ni seas un programador', subtitle: 'Código Tecno', thumbnail: '/placeholder.svg?height=200&width=300' },
  { title: 'Ruido Blanco Bebés 🌙 Sonido Blanco para Dormir Bebés 🌙 Sonido Blanco...', subtitle: 'Música Infantil TV', thumbnail: '/placeholder.svg?height=200&width=300' },
];

const shorts = [
  { thumbnail: '/placeholder.svg?height=300&width=200' },
  { thumbnail: '/placeholder.svg?height=300&width=200' },
  { thumbnail: '/placeholder.svg?height=300&width=200' },
  { thumbnail: '/placeholder.svg?height=300&width=200' },
  { thumbnail: '/placeholder.svg?height=300&width=200' },
];

export default function Component() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>YouTube</IonTitle>
          <IonSearchbar placeholder="Buscar" slot="end"></IonSearchbar>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={micOutline} />
          </IonButton>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={videocamOutline} />
          </IonButton>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={appsOutline} />
          </IonButton>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={notificationsOutline} />
          </IonButton>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={personCircleOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <div className="ion-padding-horizontal">
          <div className="categories-scroll">
            {categories.map((category, index) => (
              <IonChip key={index} color={index === 0 ? 'light' : 'medium'}>
                {category}
              </IonChip>
            ))}
          </div>
          <IonGrid>
            <IonRow>
              {videos.map((video, index) => (
                <IonCol size="12" sizeMd="6" sizeLg="4" key={index}>
                  <IonCard>
                    <IonImg src={video.thumbnail} alt={video.title} />
                    <IonCardHeader>
                      <IonCardTitle>{video.title}</IonCardTitle>
                      <IonCardSubtitle>{video.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonCardHeader>
            <IonCardTitle>Shorts</IonCardTitle>
          </IonCardHeader>
          <div className="shorts-scroll">
            {shorts.map((short, index) => (
              <IonCard key={index} className="short-card">
                <IonImg src={short.thumbnail} alt={`Short ${index + 1}`} />
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
