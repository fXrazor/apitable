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
import com.apitable.databusclient.model.DatasheetSnapshotSO;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;
import org.openapitools.jackson.nullable.JsonNullable;

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
import java.util.Map.Entry;
import java.util.Set;

import com.apitable.databusclient.JSON;

/**
 * BaseDatasheetPackSO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class BaseDatasheetPackSO {
  public static final String SERIALIZED_NAME_DATASHEET = "datasheet";
  @SerializedName(SERIALIZED_NAME_DATASHEET)
  private Object datasheet = null;

  public static final String SERIALIZED_NAME_FIELD_PERMISSION_MAP = "fieldPermissionMap";
  @SerializedName(SERIALIZED_NAME_FIELD_PERMISSION_MAP)
  private Object fieldPermissionMap = null;

  public static final String SERIALIZED_NAME_SNAPSHOT = "snapshot";
  @SerializedName(SERIALIZED_NAME_SNAPSHOT)
  private DatasheetSnapshotSO snapshot;

  public BaseDatasheetPackSO() {
  }

  public BaseDatasheetPackSO datasheet(Object datasheet) {
    
    this.datasheet = datasheet;
    return this;
  }

   /**
   * Get datasheet
   * @return datasheet
  **/
  @javax.annotation.Nullable
  public Object getDatasheet() {
    return datasheet;
  }


  public void setDatasheet(Object datasheet) {
    this.datasheet = datasheet;
  }


  public BaseDatasheetPackSO fieldPermissionMap(Object fieldPermissionMap) {
    
    this.fieldPermissionMap = fieldPermissionMap;
    return this;
  }

   /**
   * Get fieldPermissionMap
   * @return fieldPermissionMap
  **/
  @javax.annotation.Nullable
  public Object getFieldPermissionMap() {
    return fieldPermissionMap;
  }


  public void setFieldPermissionMap(Object fieldPermissionMap) {
    this.fieldPermissionMap = fieldPermissionMap;
  }


  public BaseDatasheetPackSO snapshot(DatasheetSnapshotSO snapshot) {
    
    this.snapshot = snapshot;
    return this;
  }

   /**
   * Get snapshot
   * @return snapshot
  **/
  @javax.annotation.Nonnull
  public DatasheetSnapshotSO getSnapshot() {
    return snapshot;
  }


  public void setSnapshot(DatasheetSnapshotSO snapshot) {
    this.snapshot = snapshot;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaseDatasheetPackSO baseDatasheetPackSO = (BaseDatasheetPackSO) o;
    return Objects.equals(this.datasheet, baseDatasheetPackSO.datasheet) &&
        Objects.equals(this.fieldPermissionMap, baseDatasheetPackSO.fieldPermissionMap) &&
        Objects.equals(this.snapshot, baseDatasheetPackSO.snapshot);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(datasheet, fieldPermissionMap, snapshot);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaseDatasheetPackSO {\n");
    sb.append("    datasheet: ").append(toIndentedString(datasheet)).append("\n");
    sb.append("    fieldPermissionMap: ").append(toIndentedString(fieldPermissionMap)).append("\n");
    sb.append("    snapshot: ").append(toIndentedString(snapshot)).append("\n");
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
    openapiFields.add("datasheet");
    openapiFields.add("fieldPermissionMap");
    openapiFields.add("snapshot");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("datasheet");
    openapiRequiredFields.add("snapshot");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to BaseDatasheetPackSO
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!BaseDatasheetPackSO.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in BaseDatasheetPackSO is not found in the empty JSON string", BaseDatasheetPackSO.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!BaseDatasheetPackSO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `BaseDatasheetPackSO` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : BaseDatasheetPackSO.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the required field `snapshot`
      DatasheetSnapshotSO.validateJsonElement(jsonObj.get("snapshot"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!BaseDatasheetPackSO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'BaseDatasheetPackSO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<BaseDatasheetPackSO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(BaseDatasheetPackSO.class));

       return (TypeAdapter<T>) new TypeAdapter<BaseDatasheetPackSO>() {
           @Override
           public void write(JsonWriter out, BaseDatasheetPackSO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public BaseDatasheetPackSO read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of BaseDatasheetPackSO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of BaseDatasheetPackSO
  * @throws IOException if the JSON string is invalid with respect to BaseDatasheetPackSO
  */
  public static BaseDatasheetPackSO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, BaseDatasheetPackSO.class);
  }

 /**
  * Convert an instance of BaseDatasheetPackSO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

