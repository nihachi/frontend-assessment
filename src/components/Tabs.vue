<template>
  <div class="col-12 px-md-3 px-4">
    <div>
      <mq-layout mq="tablet+">
        <b-tabs content-class="mt-3" fill>
          <div v-for="data in tabsJson" :key="data.title">
            <b-tab :title="data.title"> <p v-html="data.content"></p></b-tab>
          </div>
        </b-tabs>
      </mq-layout>
      <mq-layout mq="mobile">
        <div class="accordion" role="tablist">
          <div v-for="(data, index) in tabsJson" :key="data.title">
            <b-card no-body :class="'mb-' + index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle="'accordion-' + index"
                  variant="light"
                  >{{ data.title }}</b-button
                >
              </b-card-header>
              <b-collapse
                :id="'accordion-' + index"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text><p v-html="data.content"></p></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </mq-layout>
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";
export default {
  name: "Tabs",
  data() {
    return {
      tabsJson: json,
    };
  },
};
</script>