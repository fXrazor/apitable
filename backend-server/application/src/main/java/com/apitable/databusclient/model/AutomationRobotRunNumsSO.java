/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.apitable.databusclient.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.apitable.databusclient.JSON;

/**
 * AutomationRobotRunNumsSO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AutomationRobotRunNumsSO {
  public static final String SERIALIZED_NAME_RECENTLY_RUN_COUNT = "recentlyRunCount";
  @SerializedName(SERIALIZED_NAME_RECENTLY_RUN_COUNT)
  private Long recentlyRunCount;

  public AutomationRobotRunNumsSO() {
  }

  public AutomationRobotRunNumsSO recentlyRunCount(Long recentlyRunCount) {
    
    this.recentlyRunCount = recentlyRunCount;
    return this;
  }

   /**
   * Get recentlyRunCount
   * @return recentlyRunCount
  **/
  @javax.annotation.Nonnull
  public Long getRecentlyRunCount() {
    return recentlyRunCount;
  }


  public void setRecentlyRunCount(Long recentlyRunCount) {
    this.recentlyRunCount = recentlyRunCount;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AutomationRobotRunNumsSO automationRobotRunNumsSO = (AutomationRobotRunNumsSO) o;
    return Objects.equals(this.recentlyRunCount, automationRobotRunNumsSO.recentlyRunCount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(recentlyRunCount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AutomationRobotRunNumsSO {\n");
    sb.append("    recentlyRunCount: ").append(toIndentedString(recentlyRunCount)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("recentlyRunCount");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("recentlyRunCount");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to AutomationRobotRunNumsSO
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AutomationRobotRunNumsSO.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AutomationRobotRunNumsSO is not found in the empty JSON string", AutomationRobotRunNumsSO.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AutomationRobotRunNumsSO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AutomationRobotRunNumsSO` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : AutomationRobotRunNumsSO.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AutomationRobotRunNumsSO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AutomationRobotRunNumsSO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AutomationRobotRunNumsSO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AutomationRobotRunNumsSO.class));

       return (TypeAdapter<T>) new TypeAdapter<AutomationRobotRunNumsSO>() {
           @Override
           public void write(JsonWriter out, AutomationRobotRunNumsSO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AutomationRobotRunNumsSO read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of AutomationRobotRunNumsSO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of AutomationRobotRunNumsSO
  * @throws IOException if the JSON string is invalid with respect to AutomationRobotRunNumsSO
  */
  public static AutomationRobotRunNumsSO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AutomationRobotRunNumsSO.class);
  }

 /**
  * Convert an instance of AutomationRobotRunNumsSO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

