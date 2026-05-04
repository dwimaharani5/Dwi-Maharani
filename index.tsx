import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <View style={styles.form}>
        <Text style={styles.label}>NAME</Text>
        <TextInput style={styles.input} placeholder="Jora Martins" />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="••••••••" secureTextEntry={true} />
        
        {/* Navigasi ke Forgot Password */}
        <TouchableOpacity onPress={() => router.push('/forgot')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      {/* Navigasi ke Sign Up */}
      <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  subtitle: {
    fontSize: 14,
    color: '#bdc3c7',
    marginTop: 10,
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f5f8',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#7f8c8d',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#5d6d7e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: '#7f8c8d',
  },
  signUpLink: {
    fontWeight: 'bold',
    color: '#5d6d7e',
    textDecorationLine: 'underline',
  },
});