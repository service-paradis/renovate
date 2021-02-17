import { Datasource } from '../datasource';
import { getReleases } from '../maven';
import { MAVEN_REPO } from '../maven/common';
import { GetReleasesConfig, ReleaseResult } from '../types';

export const id = 'clojure';
export const customRegistrySupport = true;
export const defaultRegistryUrls = ['https://clojars.org/repo', MAVEN_REPO];
export const registryStrategy = 'merge';

export class Clojure extends Datasource {
  readonly id = 'clojure';

  readonly registryStrategy = 'merge';

  readonly customRegistrySupport = true;

  readonly defaultRegistryUrls = ['https://clojars.org/repo', MAVEN_REPO];

  getReleases({
    lookupName,
    registryUrl,
  }: GetReleasesConfig): Promise<ReleaseResult | null> {
    return getReleases({ lookupName, registryUrl });
  }
}
