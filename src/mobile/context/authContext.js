import axios from "axios";
import React, { createContext, useEffect, useId, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localhost } from "../services/api";

export const AuthContext = createContext();
