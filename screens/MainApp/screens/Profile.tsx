import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import tw from '../../../lib/tailwind';
import globalstyle from '../../../styles/globalstyle';
import blankProfile from '../../../assets/profile.png';

type Props = {};

const Profile = () => {
  const [name, setName] = useState('John Smith');

  const [email, setEmail] = useState('john_smith@gmail.com');

  const [phone, setPhone] = useState('061-123-45678');

  const [isTouch, setIsTouch] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <View style={tw`flex-1 flex mx-auto w-4/5 py-8`}>
        <View style={tw`flex flex-1 flex-col justify-between gap-4`}>
          {/* avatar */}
          <View style={tw`flex items-center`}>
            <Image
              source={blankProfile}
              style={tw`w-30 h-30 border-emerald-400 border-8 rounded-full`}
            ></Image>
          </View>
          <View style={tw`flex flex-col gap-12`}>
            <View>
              {/* name */}
              <Input
                leadingIcon={
                  <UserIcon style={tw`flex w-6 h-6 text-gray-300`} />
                }
                error="Error message"
                placeholder="Name"
                onChangeText={(text) => setName(text)}
                value={name}
                touched={isTouch}
                editable={isEdit}
              />
            </View>
            <View>
              {/* email */}
              <Input
                leadingIcon={
                  <EnvelopeIcon style={tw`flex w-6 h-6 text-gray-300`} />
                }
                error="Error message"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                touched={isTouch}
                editable={isEdit}
              />
            </View>
            <View>
              {/* phone */}
              <Input
                leadingIcon={
                  <PhoneIcon style={tw`flex w-6 h-6 text-gray-300`} />
                }
                error="Error message"
                placeholder="Phone"
                onChangeText={(text) => setPhone(text)}
                value={phone}
                touched={isTouch}
                editable={isEdit}
              />
            </View>
          </View>
          {isEdit ? (
            <Button onPress={() => setIsEdit(false)}>Cancel</Button>
          ) : (
            <View style={tw`flex gap-4`}>
              <Button onPress={() => setIsEdit(true)}>Edit Profile</Button>
              <Button>Logout</Button>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
