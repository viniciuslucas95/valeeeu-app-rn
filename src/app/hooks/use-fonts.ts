import {
  useFonts as useExpoFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_300Light_Italic,
} from '@expo-google-fonts/roboto';

export function useFonts() {
  const [hasFontsLoaded] = useExpoFonts({
    'Roboto Light': Roboto_300Light,
    'Roboto Light Italic': Roboto_300Light_Italic,
    'Roboto Regular': Roboto_400Regular,
    'Roboto Medium': Roboto_500Medium,
  });

  return { hasFontsLoaded };
}
